import React, { useState } from 'react'
import styles from './videoBox.module.scss';

const VideoBox2 = (props) => {

    const [data, setData] = useState()

    return (
        <div className={styles.container}>
            <div>
                <header>
                    <h2 className={styles.title}>{props.title}</h2>

                </header>
                <body>
                    <React.Fragment>
                        <img className={styles.image} src={props.image} />
                    </React.Fragment>
                </body>


            </div>
        </div>

    )
}

export default VideoBox2