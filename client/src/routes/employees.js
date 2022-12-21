import Header from "../components/templates/Header";
import { Space, Table, Tag } from 'antd';
import { useState, useEffect } from "react";
import axios from 'axios'


const data = [
    {
        key: '1',
        firstName: 'John',
        lastName: 'Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['VIP', 'developer'],
        in_out: 1
    },
];

const Employees = () => {
    const { Column, ColumnGroup } = Table;
    const [data, setData] = useState()

    const getCustomer = async () => {
        const res = await axios.get('http://localhost:3005/user')
        console.log(res.data.data)
        setData(res.data.data)
    }

    useEffect(() => {
        getCustomer()
    }, [])

    return (
        <Header>
            <main style={{ padding: "1rem 3rem" }}>
                <h2>Employees</h2>
                <Table dataSource={data}>
                    <Column title="email" dataIndex="email" />
                    <Column title="name" dataIndex="name" />
                </Table>
            </main>
        </Header>
    );
}

export default Employees


