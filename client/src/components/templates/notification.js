import React from 'react'
import styles from './notification.module.scss';
import { useState, useEffect } from "react";
import axios from 'axios'


const Notification = () => {
    const [data, setData] = useState([])

    const getCustomer = async () => {
        const res = await axios.get('http://localhost:3005/customer')
        // console.log(res.data.data)
        setData(res.data.data)
    }

    useEffect(() => {
        setInterval(() => {
            getCustomer()
        }, 1000);
    }, [data])

    const ds = data.reverse().slice(0, 8)

    return (
        <div>
            {ds.map((carlist) => (
                <div key={carlist.id} className={styles.container}>
                    <div style={{ margin: '10px' }}>
                        ○
                    </div >
                    <div >
                        고객명: <span>{carlist.username}</span>
                        <br />
                        차량번호: <span>{carlist.carNumber}</span>
                        <br />
                        고객등급: <span>{carlist.grade}</span>
                    </div >
                </div>
            ))}
        </div>
    )
}

export default Notification