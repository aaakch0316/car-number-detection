import React from 'react'
import dummy from "./dummyinout.json"

const DUMMY = dummy;
const Test = () => {
    const customerList = DUMMY.map((props) => (
        <div>
            id={props.id}
            name={props.name}
            car_number={props.car_number}
            age={props.age}
            date={props.month}
        </div>
    ))

    const chartWeekday = [
        { label: '1', value: 0 },
        { label: '2', value: 0 },
        { label: '3', value: 0 },
        { label: '4', value: 0 },
        { label: '5', value: 0 },
        { label: '6', value: 0 },
        { label: '0', value: 0 },
    ];

    for (const num of DUMMY) {
        const addWeekday = num.weekday;
        chartWeekday[addWeekday].value += 1;
    }

    console.log(chartWeekday)

    return (
        <div>
            {chartWeekday.map(dataPoint => dataPoint.value)}
            {/* const totalMaximum = Math.max(...dataPointValues) */}
        </div>
    );
}

export default Test


