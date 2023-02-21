import React, { useEffect, useState } from 'react';
import styles from './videoBox.module.scss';
import axios from 'axios';

const VideoBox4 = () => {
    const [videoUrl, setVideoUrl] = useState('http://localhost:5000/video');

    // useEffect(() => {
    //     function handleVideoUrl() {
    //         axios.get('http://localhost:5000/video')
    //             .then(response => {
    //                 console.log(response);
    //                 console.log(response.request.responseURL)
    //                 setVideoUrl(response.request.responseURL);
    //             });
    //     }
    //     handleVideoUrl()
    // }, []);

    return (
        <div className={styles.container}>
            <div>
                <header>
                    <h2 className={styles.title}>CCTV_No</h2>
                </header>
                <body>
                    <div style={{
                        // display: 'flex',
                        // justifyContent: 'center'
                        // margin: 'auto'
                    }}>
                        {/* {videoUrl && <image src={videoUrl} autoPlay={true} />} */}
                        {/* <video src="http://localhost:5000/video" autoPlay={true} width='500px' height="500px" /> */}
                        <iframe id="inlineFrameExample"
                            title="Inline Frame Example"
                            width="640px"
                            height="480px"
                            allowfullscreen={true}
                            src="http://localhost:5000/video">
                        </iframe>

                    </div>
                </body>
            </div>
        </div>

    )
}

export default VideoBox4;


