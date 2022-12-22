import React, { Children } from 'react'
import styles from './videoBox.module.scss';
import ReactPlayer from "react-player";


const VideoBox = ({ children }) => {
    // const data = [...props]
    // console.log(data)

    // console.log(props.v1.map(v1 => v1.value))
    // console.log({ dataPointValues })

    const submitHandler = (event) => {
        // console.log('test')
        event.preventDefault();
    }

    return (
        <div className={styles.container}>
            <div>
                <header>
                    <h2 className={styles.title}>CCTV_No</h2>
                    <button
                        onClick={submitHandler}
                        className={styles.submit}
                    >submit</button>
                </header>
                <body>
                    <React.Fragment>
                        <div>
                            <img className={styles.image} src={children}></img>
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