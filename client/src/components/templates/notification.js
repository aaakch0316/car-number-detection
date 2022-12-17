import React from 'react'
import styles from './notification.module.scss';

const Notification = () => {
    return (
        <div className={styles.container}>
            <div>
                <p>notification</p>
                <p>진입차량: 13123</p>
            </div>
        </div >
    )
}

export default Notification