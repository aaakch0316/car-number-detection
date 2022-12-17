from flask import Flask 
from flask_cors import CORS


app = Flask(__name__)
CORS(app)


def model_analysis(video):
  print('modeling.....')
  # 여기에 모델링 로직을 넣어주세요/
  return '12가 1234'

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
    app.run(host='0.0.0.0', port=8000)