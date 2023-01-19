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
    const { Column } = Table;
    const [data, setData] = useState()

    const getCustomer = async () => {
        const res = await axios.get('http://localhost:3005/user')
        console.log(res.data.data)
        setData(res.data.data)
    }

    useEffect(() => {
        getCustomer()
    }, [])

    const handlingDeleteDate = async (row) => {
        try {

            const res = await axios.get(`http://localhost:3005/user/delete/${row.id}`)
            console.log(res)
            getCustomer()
        } catch (e) { console.log(e.message) }

    }

    return (
        <Header>
            <main style={{ padding: "1rem 3rem" }}>
                <h2>Employees</h2>
                <Table dataSource={data}>
                    <Column title="email" dataIndex="email" />
                    <Column title="name" dataIndex="name" />
                    <Column
                        title='Delete'

                        render={(row) => (
                            <div onClick={() => handlingDeleteDate(row)}>
                                <Space size="middle">
                                    Delete
                                </Space>
                            </div>
                        )}

                    />
                </Table>
            </main>
        </Header>
    );
}

export default Employees


