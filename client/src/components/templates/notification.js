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
        getCustomer()
    }, [])


    const ds = data.reverse().slice(0, 8)
    // const dwd = {data.users.map((user) => (
    //     <li key={user.id}>
    //         { }
    //     </li>
    // ))}
    return (
        <div>
            {ds.map((carlist) => (
                <div key={carlist.id} className={styles.container}>
                    <div style={{ margin: '10px' }}>
                        ○
                    </div >
                    <div >
                        이름: <span>{carlist.name}</span>
                        <br />
                        차량번호: <span>{carlist.car_number}</span>
                    </div >
                </div>
            ))}
        </div>



        //         {/* <span>{carNumber}</span><br /> */}
        //         {/* <span>{data[0].id}</span><br /> */}
        //         <span>등급: none</span>
        //     </div>
        // </div >
    )
}

export default Notification