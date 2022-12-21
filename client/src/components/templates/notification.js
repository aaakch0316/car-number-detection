import React from 'react'
import styles from './notification.module.scss';

const Notification = () => {
    return (
        <div className={styles.container}>
            <div>
                <span>notification</span><br />
                <span>진입차량: 64고 8564</span><br />
                <span>등급: none</span>
            </div>
        </div >
    )
}

export default Notification