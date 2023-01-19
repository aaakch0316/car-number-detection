import React, { Children } from 'react'
import Webcam from "react-webcam";

import styles from './videoBox.module.scss';
import ReactPlayer from "react-player";
import { useState, useEffect } from "react";
import axios from 'axios';


const typeSelector = {
    RED: 1,
    GOLD: 2,
    PLATUNUM: 3,
    BLACK: 4
}

const VideoBox = (props) => {
    // console.log(props.)
    const name = props.name
    const type = props.type
    const carNumber = props.carNumber

    const [data, setData] = useState()

    const [image, setImage] = useState({
        image_file: "",
        preview_URL: "img/default_image.png",
    });

    let inputRef;

    const saveImage = (e) => {
        e.preventDefault();
        const fileReader = new FileReader();

        if (e.target.files[0]) {
            fileReader.readAsDataURL(e.target.files[0])
        }
        fileReader.onload = () => {
            setImage(
                {
                    image_file: e.target.files[0],
                    preview_URL: fileReader.result
                }
            )
        }


    }

    const deleteImage = () => {
        setImage({
            image_file: "",
            preview_URL: "img/default_image.png",
        });
    }

    const getdata = async () => {
        const res = await axios.get('http://localhost:3005/customer')
        // console.log(res.data.data)
        setData(res.data.data)
    }

    const submitHandler = async () => {
        const formData = new FormData()
        formData.append('file', image.image_file);
        await axios.post('http://127.0.0.1:5000/test', formData);
        setImage({
            image_file: "",
            preview_URL: "img/default_image.png",
        });

        try {
            const resource = await axios.get('http://localhost:5000/v1/live/customer-car')
            console.log(resource?.data?.car_number)
            // userDB 에서 차량 조회 해서 아래의 name과 type에 넣어준다.

            // const car_number = resource?.data?.car_number
            // grade
            // username

            const visitorDB = await axios.get("http://localhost:3005/visitor/search", {
                // car_number: resource?.data?.car_number,
                car_number: resource?.data?.car_number
            })
            // console.log(visitorDB)
            // console.log(visitorDB?.data?.data[0]?.username)
            // console.log(visitorDB?.data?.data[0]?.car_number)
            // console.log(visitorDB?.data?.data[0]?.grade)
            const customerDB = await axios.post('http://localhost:3005/customer', {
                // name: visitorDB.data.username,
                // type: typeSelector[type], // typeSelector[visitorDB.data.grade]
                username: visitorDB?.data?.data[0]?.username,
                carNumber: visitorDB?.data?.data[0]?.car_number,
                grade: visitorDB?.data?.data[0]?.grade
            })
            console.log(customerDB?.data?.data)
            // alert(JSON.stringify(resource?.data?.car_number))
            getdata()
        } catch (e) { console.log(e.message) }
    }


    // const [carNumber, setCarNumber] = useState('');
    // const [type, setType] = useState('');

    return (
        <div className={styles.container}>
            <div>
                <header>
                    <h2 className={styles.title}>CCTV_No</h2>
                    <button
                        variant="contained"
                        onClick={submitHandler}
                        className={styles.submit}
                    >submit
                    </button>

                    <button
                        variant="contained"
                        onClick={deleteImage}
                        className={styles.submit}
                    >delete
                    </button>

                    <button
                        type="primary"
                        variant="contained"
                        onClick={() => inputRef.click()}
                        className={styles.submit}
                    >add
                    </button>

                    <input type="file" accept="image/*"
                        onChange={saveImage}
                        // 클릭할 때 마다 file input의 value를 초기화 하지 않으면 버그가 발생할 수 있다
                        // 사진 등록을 두개 띄우고 첫번째에 사진을 올리고 지우고 두번째에 같은 사진을 올리면 그 값이 남아있음!
                        // onClick={(e) => e.target.value}
                        onClick={(e) => e.target.value = null}
                        ref={refParam => inputRef = refParam}
                        style={{ display: "none" }}
                    />

                </header>
                <body>
                    <React.Fragment>
                        <div>
                            <img className={styles.image} src={image.preview_URL} />
                            {/* <img className={styles.image} src={props.image} /> */}
                        </div>
                        {/* <ReactPlayer
                            url={"https://postfiles.pstatic.net/MjAyMDAxMDRfNzMg/MDAxNTc4MTMyODY4MzEz.SuHbqSzHFEHAK0LjnCadSvXVH_-iHRHlRsAqP0hM45Ig.r6veNDFKvHbM-HTWaLMHZm9vsynul6Xm0vdv01BHAn8g.PNG.ihwaw/e047ba2b-6254-48ac-bad9-2d479ad17fd8.jpg?type=w966"}
                            width="100%"
                            heigth="100%"
                            playing={true}
                            muted={true}
                            controls={true}
                        /> */}
                    </React.Fragment>
                </body>


            </div>
        </div>

    )
}

export default VideoBox