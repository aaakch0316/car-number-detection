import React from 'react'
import dummy from "./dummyrecodes.json"

const DUMMY = dummy;
const Test = () => {
    const customerList = DUMMY.map((props) => (
        <li>
            id={props.id}
            name={props.name}
            car_number={props.car_number}
            age={props.age}
            date={props.date}
        </li>
    ))
    console.log(customerList)
    // const month = props.date.toLocaleString('en-US', { month: "long" });


    return (
        <section>
            <ul>
                {customerList}
            </ul>
        </section>
    );
}

export default Test
