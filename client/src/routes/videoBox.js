import React from 'react'
import styles from './videoBox.module.scss';

const VideoBox = () => {
    return (
        <div className={styles.container}>
            <div>
                <h1>CCTV</h1>
            </div>
            <img src="./test.png" alt="test" />
        </div>
    )
}

export default VideoBox