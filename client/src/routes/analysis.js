import React from 'react'
import Header from "../components/templates/Header";
import GraphBox from "../components/templates/GraphBox"

import { useState, useEffect } from "react";
import axios from 'axios'

const Analysis = () => {
    const [data, setData] = useState([])

    const getCustomer = async () => {
        const res = await axios.get('http://localhost:3005/visitor')
        console.log(res.data.data)
        setData(res.data.data)
    }

    useEffect(() => {
        getCustomer()
    }, [])

    const chartWeekday = [
        { label: '일', weekday: 0 },
        { label: '월', weekday: 0 },
        { label: '화', weekday: 0 },
        { label: '수', weekday: 0 },
        { label: '목', weekday: 0 },
        { label: '금', weekday: 0 },
        { label: '토', weekday: 0 },
    ];

    for (const num of data) {
        // console.log(num)
        const addWeekday = num.weekday;
        console.log(addWeekday)
        chartWeekday[addWeekday].weekday += 1;
    }

    return (
        <Header>
            <main style={{ padding: "1rem 3rem" }}>
                <h2>Analysis</h2>
                <div>
                    <GraphBox wdata={chartWeekday} col1={"label"} />

                    {/* <GraphBox />
                <GraphBox />
                <GraphBox />
                <GraphBox /> */}
                </div>
            </main>
        </Header>
    )
}

export default Analysis;