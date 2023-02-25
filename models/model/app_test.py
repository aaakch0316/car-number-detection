import io
import os
import time
import shutil

from glob import glob
from werkzeug.utils import secure_filename

import numpy as np
from PIL import Image
import cv2

from model_detect import run

from myfunc import change_coordinate, crop_img
from ocr import easy_ocr
import argparse

from flask import Flask, render_template, request, redirect, Response, jsonify, request, send_file
from flask_cors import CORS
app = Flask(__name__)
app.config['JSON_AS_ASCII'] = False  # 한글 깨짐 해결
CORS(app)

import pymysql
db = pymysql.connect(host='127.0.0.1',
                     port=3306,
                     user='root',
                     passwd='root',
                     db='test',
                     charset='utf8')
#'''
# Load Pre-trained Model
# model = torch.hub.load(
#         "ultralytics/yolov5", "yolov5s", pretrained=True, force_reload=True
#         )#.autoshape()  # force_reload = recache latest code
# #'''
# Load Custom Model
import torch
model = torch.hub.load("ultralytics/yolov5", "custom", path = "C:/projects/car-number-detection/models/model/yo5s_b32_e10.pt", force_reload=True)

# Set Model Settings
model.eval()
model.conf = 0.6  # confidence threshold (0-1)
model.iou = 0.45  # NMS IoU threshold (0-1) 

from io import BytesIO
root_dir = 'model'
v5_weights = os.path.join(root_dir, 'yo5s_b32_e10.pt')
v5_source = os.path.join(root_dir, 'capture/cap.jpg')
v5_data = os.path.join(root_dir, 'custom.yaml')
croped_save_dir = os.path.join(root_dir, 'croped')

def video():
    cap=cv2.VideoCapture(0)
    while(cap.isOpened()):
        start_time = time.time()
        success, frame = cap.read()
        if success == True:
            ret, buffer=cv2.imencode('.jpg', frame)
            cv2.imwrite(v5_source, frame)
            frame=buffer.tobytes()
            img = Image.open(io.BytesIO(frame))
            results = model(img, size=416)
            img = np.squeeze(results.render()) #RGB
            img_BGR = cv2.cvtColor(img, cv2.COLOR_RGB2BGR) #BGR
            frame = cv2.imencode('.jpg', img_BGR)[1].tobytes()
        else:
            continue
        yield(b'--frame\r\n'b'Content-Type: image/jpg\r\n\r\n' + frame + b'\r\n')
        
def chr():
    save_dir, detect_result = run(weights = v5_weights,
                                            source = v5_source,
                                            data = v5_data,
                                            imgsz=(416, 416),
                                            conf_thres=0.5,
                                            save_txt=True,
                                            save_conf=True,
                                            project = 'model/result_save'
                                            )
    x_min, x_max, y_min, y_max = change_coordinate(v5_source, detect_result) # 원본이미지, 탐색결과
    croped_coordinate = (x_min, x_max, y_min, y_max)  # 잘라내기 할 절대 좌표
    
    # crop이미지 저장
    croped_img_path = crop_img(croped_save_dir, v5_source, croped_coordinate) # 저장경로, 원본이미지, crop좌표

    # OCR
    car_num = easy_ocr(croped_img_path)
    print('car_num:', car_num)
    print('car_num:', car_num)
    print('car_num:', car_num)
    print('car_num:', car_num)
    print('car_num:', car_num)
    print('car_num:', car_num)
    
    
    with db.cursor() as cursor:                 
        # number_dic = {
        #     '3108' : '52가3108',
        #     '4568' : '123가4568',
        #     '0596' : '59버0596'
        # }
        # for i in number_dic:
        #     if i in car_num:
        #         car_num = number_dic[i]
        #         break
            
        # 차량번호 조회
        cursor.execute(f"SELECT * from visitor WHERE car_number='{car_num}'")
        db.commit()
        result = cursor.fetchone()
        username = result[6]
        carnum= result[5]
        grade = result[7]
        
        # 고객정보 확인
        cursor.execute(f"INSERT INTO customer ( username, carNumber, grade ) VALUES ('{username}', '{carnum}', '{grade}')")
        db.commit()
    
# @app.route('/')
# def index():
#     return render_template("index.html")

@app.route('/live')
def live():
    return Response(video(), mimetype='multipart/x-mixed-replace; boundary=frame')

@app.route('/ocr')
def ocr():
    chr()
    # result = chr()
    # print("car_num: ", result)
    # print("car_num: ", result)
    # print("car_num: ", result)
    # return result
    

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Flask app exposing yolov5 models")
    parser.add_argument("--port", default=5000, type=int, help="port number")
    args = parser.parse_args()
    app.run(host="0.0.0.0", port=args.port)  # debug=True causes Restarting with stat
    # app.run()

# Docker Shortcuts
# docker build --tag yolov5 .
# docker run --env="DISPLAY" --volume="/tmp/.X11-unix:/tmp/.X11-unix:rw" --device="/dev/video0:/dev/video0" yolov5