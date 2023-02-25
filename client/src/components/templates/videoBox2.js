import React, { useState, useEffect } from 'react';
import styles from './videoBox.module.scss';

import axios from 'axios';

const ExampleComponent = (props) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const intervalId = setInterval(async () => {
            try {
                // axios.get('http://localhost:5000/v')
                //     .then(response => setData(response.data))
                //     .catch(error => console.error(error));
                // const resource = await axios.get('http://localhost:5000/ocr')
                // console.log(resource?.data?.car_number)
                //             console.log(resource?.data?.car_number)
                //             console.log(resource?.data?.car_number)
                //             console.log(resource?.data?.car_number)
                //             console.log(resource?.data?.car_number)
                //             console.log(resource?.data?.car_number)

                //             const visitorDB = await axios.get(`http://localhost:3005/visitor/search?car_number="${resource?.data?.car_number}"`)
                //             console.log('visitorDB.data')
                //             console.log(visitorDB.data)
                //             if (visitorDB.data.data[0].car_number) {

                //                 const customerDB = await axios.post('http://localhost:3005/customer', {
                //                     username: visitorDB?.data?.data[0]?.username,
                //                     carNumber: visitorDB?.data?.data[0]?.car_number,
                //                     grade: visitorDB?.data?.data[0]?.grade
                //                 })
                //                 // console.log(customerDB?.data?.data)
                //             }

            } catch (error) {
                // console.error(error);
            }
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <div className={styles.container}>
            <header>
                <h2 className={styles.title}>{props.title}</h2>
            </header>
            <body>
                {data ? <p>{data}</p> : <p>Loading...</p>}
            </body>
        </div>
    );
};

export default ExampleComponent;
