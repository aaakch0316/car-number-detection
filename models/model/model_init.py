'''
모델 불러오기
'''

#-------------------------------------------------------------
# YOLO V5
#-------------------------------------------------------------

# import os
# BASE_PATH = os.path.dirname(os.path.abspath(os.path.dirname(__file__)))
# BASE_PATH = 'apps.home.yolov5'
# print()
# import sys
# sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))
#-------------------------------------------------------------

print('model_init.py  모델 불러오기')
from yolov5.utils.torch_utils import select_device
from yolov5.models.common import DetectMultiBackend

# 파라미터 설정
# weights = 'apps/home/yolov5/yolov5l_b64_e50_best.pt'
# data = 'apps/home/yolov5/custom.yaml'
weights = 'model/yo5s_b32_e10.pt'
data = 'model/custom.yaml'
# weights = ''
# data = ''
dnn = False
half=False
device=''
device = select_device(device)
# print(device)

# 모델 불러오기
model = DetectMultiBackend(weights, device=device, dnn=dnn, data=data, fp16=half)


# model_upload()
# print('model:',model)
#-------------------------------------------------------------