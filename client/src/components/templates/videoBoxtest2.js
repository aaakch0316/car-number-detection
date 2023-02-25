import React, { useCallback, useRef, useState } from "react";
import styles from './videoBox.module.scss';
import Webcam from "react-webcam";

const VideoBoxtest2 = (props) => {

    // const webcamRef = React.useRef(null);
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

    return (
        <div className={styles.container}>
            <div>
                <header>
                    <h2 className={styles.title}>{props.title}</h2>

                </header>
                <body>
                    <div className="Container">
                        {img === null ? (
                            <>
                                <Webcam
                                    audio={false}
                                    mirrored={false}
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
                    </div>
                </body>


            </div >
        </div >

    )
}

export default VideoBoxtest2