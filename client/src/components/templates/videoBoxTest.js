import React, { useCallback, useRef, useState } from "react";
import styles from './videoBox.module.scss';
import axios from 'axios';

const typeSelector = {
    RED: 1,
    GOLD: 2,
    PLATUNUM: 3,
    BLACK: 4
}

const VideoBox2 = (props) => {

    const [img, setImg] = useState(null);
    const webcamRef = useRef(null);

    const videoConstraints = {
        width: 420,
        height: 420,
        facingMode: "user",
    };

    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImg(imageSrc);
    }, [webcamRef]);

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
        await axios.post('http://127.0.0.1:5000/model_analysis', formData);
        setImage({
            image_file: "",
            preview_URL: "img/default_image.png",
        });

        try {
            const resource = await axios.get('http://localhost:5000/v1/live/customer-car')
            console.log(resource?.data?.car_number)

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
                    <h2 className={styles.title}>{props.title}</h2>
                    {/* <button
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
                    /> */}

                </header>
                <body>
                    <React.Fragment>
                        {/* <div className="Container">
                            {img === null ? (
                                <>
                                    <Webcam
                                        audio={false}
                                        mirrored={true}
                                        height={400}
                                        width={400}
                                        ref={webcamRef}
                                        screenshotFormat="image/jpeg"
                                        videoConstraints={videoConstraints}
                                    />
                                    <button onClick={capture}>Capture photo</button>
                                </>
                            ) : (
                                <>
                                    <img src={img} alt="screenshot" />
                                    <button onClick={() => setImg(null)}>Retake</button>
                                </>
                            )}
                        </div> */}
                    </React.Fragment>
                </body>


            </div>
        </div>

    )
}

export default VideoBox2