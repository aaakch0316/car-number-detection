from flask import Flask 
from flask_cors import CORS


app = Flask(__name__)
app.config['JSON_AS_ASCII'] = False  # 한글 깨짐 해결
CORS(app)

from model_detect import run

from glob import glob
import os

from myfunc import change_coordinate, crop_img
from ocr import tesseract_ocr


def model_analysis(video):
  # print('modeling.....')
  # 여기에 모델링 로직을 넣어주세요/
  
  root_dir = 'model'

  #------------------------------------------------------
  # yolov5 탐지
  #------------------------------------------------------
  print('\nstart detect')
  v5_weights = os.path.join(root_dir, 'yo5s_b16_e10.pt')
  v5_source = os.path.join(root_dir, 'test_IMG_5288.png')
  # v5_source = os.path.join(root_dir, 'qqq.png')
  v5_data = os.path.join(root_dir, 'custom.yaml')

  save_dir, detect_result = run(weights = v5_weights,
                            source = v5_source,
                            data = v5_data,
                            imgsz=(416, 416),
                            conf_thres=0.5,
                            save_txt=True,
                            save_conf=True,
                            project = 'model/result_save'
                            )
  print('\nsave_dir:', save_dir)
  print('detect_result:', detect_result)


  #------------------------------------------------------
  # 탐지 결과 저장 파일 읽어오기
  #------------------------------------------------------
  # img_files = sorted(glob(os.path.join(save_dir, '*.png')))
  # txt_files = sorted(glob(os.path.join(save_dir, 'labels/*.txt')))

  # print('\nclass num / xywh / mAP')
  # for i, img_path in enumerate(img_files):
  #   with open(txt_files[i], 'r') as f:
  #       lines = f.readlines()

  #   for j in range(len(lines)):
  #       print(lines[j].replace('\n',''))

  #   print('img_path:', img_path)
  #   print('lines:', lines)

  # 탐지 결과 파일 저장 안하는 경우
  img_path = v5_source
  lines = detect_result
  print('img_path:', img_path)
  print('lines:', lines)


  #------------------------------------------------------
  # 좌표 변환
  #------------------------------------------------------
  print()

  x_min, x_max, y_min, y_max = change_coordinate(img_path, lines)
  print(x_min, x_max, y_min, y_max)


  #------------------------------------------------------
  # 잘라내기 Crop
  #------------------------------------------------------
  print()
  
  ori_img_path = v5_source  # 탐지하려고 한 원래 이미지
  croped_coordinate = (x_min, x_max, y_min, y_max)  # 잘라내기 할 절대 좌표
  croped_save_dir = os.path.join(root_dir, 'croped')  # 잘라내기 한 이미지를 저장 할 디렉토리
  # print(ori_img_path)
  # print(croped_coordinate)

  # 이미지 잘라내기
  croped_img_path = crop_img(croped_save_dir, ori_img_path, croped_coordinate)
  print('croped_img_path:', croped_img_path)


  #------------------------------------------------------
  # OCR
  #------------------------------------------------------
  car_num = tesseract_ocr(croped_img_path)
  print('car_num:', car_num)

  return car_num





# test
@app.route('/')
def index():
  print(f'hellow World')
  return 'Hello world'

# 모델링 로직
@app.route('/v1/live/customer-car') # 파일넣어서 추가해 주세요
def modeling():
  car_number = model_analysis('video')
  return {
    'car_number' : car_number
  }

if __name__ == '__main__':# 다른데서 부르면 실행하지 마라는 뜻이다.
    app.run()