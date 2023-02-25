from easyocr import Reader
reader = Reader(['ko'], gpu=False) # 'en': 영어로 설정

def easy_ocr(img_path):
    # path = '../1.data_backup/detect_img/test_IMG_5288.png'
    result = reader.readtext(img_path)
    # print("easy_ocr: ", result)
    # print("easy_ocr: ", result[0][1])

    # 특수 기호 삭제
    result_chars = ''
    for i in range(len(result)):
        chars = result[i][1]
        # print(chars)

        # 숫자로만 되어있는 문자열이 5자리 이상이면 뒷자리 자르기
        if (chars.isdigit()) and (len(chars) >= 5):
            chars = chars[:4]
        
        # 특수문자 없애기
        for c in chars:
            if ord('가') <= ord(c) <= ord('힣') or c.isdigit():
                result_chars += c
                
    # print("result_chars: ", result_chars)
    return result_chars


