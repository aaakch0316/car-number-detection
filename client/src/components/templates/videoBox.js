import React from 'react'
import styles from './videoBox.module.scss';

const VideoBox = () => {
    return (

        <div className={styles.container}>
            <div>
                <h1>CCTV_No</h1>
                <img src="http://www.farmsale.kr/wp-content/uploads/2015/01/62258_jo1.jpg" alt="test" width={400} height={400} />
            </div>
        </div>

    )
}

export default VideoBox