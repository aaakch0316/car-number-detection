def f_create_dir(dir_name):
    '''
    설명: 만들려는 디렉토리가 없으면 생성
    입력: 경로 + 새 디렉토리 이름
    출력: x
    예시: createDirectory('./test')
    '''
    import os
    
    try:
        if not os.path.exists(dir_name):
            os.makedirs(dir_name)
    except OSError:
        print("Error: Failed to create the directory.")


def yolo_txt2xml_coordinate(size, bbox):
    '''
    bbox = (txt_x, txt_w, txt_y, txt_h)
    x_min, x_max, y_min, y_max = yolo_txt2xml_coordinate((w, h), bbox)
    '''
    dw = 1./size[0]  # 이미지 가로 길이
    dh = 1./size[1]  # 이미지 세로 길이
    
    # x 좌표
    x_tmp = (bbox[0] / dw) * 2.0
    w_tmp = bbox[1] / dw      # x 좌표간 길이
    
    x1 = (x_tmp - w_tmp) / 2  # x 시작 좌표
    x2 = x1 + w_tmp           # x 끝 좌표
    
    # y 좌표
    y_tmp = (bbox[2] / dh) * 2.0
    h_tmp = bbox[3] / dh      # y 좌표간 길이
    
    y1 = (y_tmp - h_tmp) / 2  # y 시작 좌표
    y2 = y1 + h_tmp           # y 끝 좌표
    
    return x1, x2, y1, y2


def change_coordinate(img_path, lines):
    from PIL import Image

    img = Image.open(img_path)
    # img.show()

    # 이미지 사이즈 구하기
    img_size = img.size
    w = img_size[0]
    h = img_size[1]
    # print(img_size, w, h)

    # 탐지 한 좌표
    labels = lines[0].split(' ')
    txt_x = float(labels[1])
    txt_y = float(labels[2])
    txt_w = float(labels[3])
    txt_h = float(labels[4])
    bbox = (txt_x, txt_w, txt_y, txt_h) 
    # print('bbox:', bbox)

    # 상대 좌표를 절대 좌표로 변환
    x_min, x_max, y_min, y_max = yolo_txt2xml_coordinate((w, h), bbox)
    # print(x_min, x_max, y_min, y_max)

    # 절대 좌표에서 일정 픽셀수 만큼 확장
    pixel_num = 5
    x_min -= pixel_num
    x_max += pixel_num
    y_min -= pixel_num
    y_max += pixel_num

    return x_min, x_max, y_min, y_max


def crop_img(save_dir, img_path, coordinate):
    '''
    입력: 저장할 경로, 잘라내기 할 이미지 경로, 좌표 리스트
    출력: 잘라내기 한 이미지가 저장된 경로와 파일명
    '''
    import os
    import cv2

    img = cv2.imread(img_path)
    # cv2_imshow(img)

    # 이미지를 자르기 위한 좌표 변환
    x_min = int(coordinate[0])
    x_max = int(coordinate[1])
    y_min = int(coordinate[2])
    y_max = int(coordinate[3])

    # 이미지 자르기
    crop_img = img[y_min:y_max, x_min:x_max]

    # cv2_imshow(crop_img)

    # 잘라낸 이미지 저장
    f_create_dir(save_dir)

    croped_img_file = os.path.basename(img_path)
    croped_img_path = os.path.join(save_dir, croped_img_file)
    # print(croped_img_path)
    cv2.imwrite(croped_img_path, crop_img)

    return croped_img_path