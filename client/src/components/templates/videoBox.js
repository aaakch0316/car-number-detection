import React from 'react'
import styles from './videoBox.module.scss';
import ReactPlayer from "react-player";


const VideoBox = (props) => {
    return (
        <div className={styles.container}>
            <div>
                <header>
                    <h2>CCTV_No</h2>
                </header>
                <body>
                    <React.Fragment>
                        <ReactPlayer
                            url={"https://www.youtube.com/watch?v=akrF3bUnThk"}
                            width="100%"
                            heigth="100%"
                            playing={true}
                            muted={true}
                            controls={true}
                        />
                    </React.Fragment>
                </body>


            </div>
        </div>

    )
}

export default VideoBox