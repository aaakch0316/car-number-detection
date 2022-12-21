import React from 'react'
import dummy from "./dummyinout.json"
import Header from "../components/templates/Header";
import GraphBox from "../components/templates/GraphBox"

const DUMMY = dummy;
const Analysis = () => {
    const labels = [{
        id: 0,
        x: 'xsx'
    }]


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

    // console.log(chartWeekday)

    return (
        <Header>
            <div>
                <GraphBox wdata={chartWeekday} label={labels} />
                <GraphBox wdata={chartWeekday} />
                {/* <GraphBox />
                <GraphBox />
                <GraphBox /> */}
            </div>
        </Header>
    )
}

export default Analysis;