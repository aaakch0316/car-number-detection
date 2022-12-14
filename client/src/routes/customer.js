import Header from "../components/templates/Header";
import { Space, Table, Tag, Button } from 'antd';
import { useState, useEffect } from "react";
import axios from 'axios'

const dummyData = [
  {
    key: '1',
    firstName: 'John',
    lastName: 'Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['VIP', 'developer'],
    in_out: 1
  },
  {
    key: '2',
    firstName: 'John',
    lastName: 'Brown',
    age: 28,
    address: 'New York No. 1 Lake Park',
    tags: ['VIP', 'employee'],
    in_out: 1
  },
];

export default function Customer() {
  const { Column, ColumnGroup } = Table;
  const [data, setData] = useState()

  const getCustomer = async () => {
    const res = await axios.get('http://localhost:3005/customer')
    console.log(res.data.data)
    setData(res.data.data)
  }

  useEffect(() => {
    getCustomer()
  }, [])

  const handlingCreateData = async () => {
    try {
      if (name && carNumber && type) {
        console.log(name, carNumber, type)
        const res = await axios.post('http://localhost:3005/customer', {
          name: name,
          type: type,
          carNumber: carNumber
        })
        getCustomer()
      }
    } catch (e) { console.log(e.message) }
  }

  const handlingDeleteDate = async (row) => {
    try {

      const res = await axios.get(`http://localhost:3005/customer/delete/${row.id}`)
      console.log(res)
      getCustomer()
    } catch (e) { console.log(e.message) }


    // const update = data.filter((ob) => ob.key !== key)
    // setData(update)
  }

  const [name, setName] = useState('');
  const [carNumber, setCarNumber] = useState('');
  const [type, setType] = useState('');

  const handlingName = (event) => {
    setName(event.target.value)
  }
  const handlingCarNumber = (event) => {
    setCarNumber(event.target.value)
  }
  const handlingType = (event) => {
    setType(event.target.value)
  }
  return (
    <Header>
      <main style={{ padding: "1rem 3rem" }}>
        <h2>Customer</h2>
        <div style={{
          display: 'flex',
          // flexDirection: 'column',
          justifyContent: 'space-between',
          width: '100%',
          margin: '10px',
          border: '3px solid #fafafa',
          marginTop: '3px'
        }}>
          <div>
            <label htmlFor="name">name: </label>
            <input style={{
              backGroundColor: "#f1f2f4"

            }}
              id="name" type="text" value={name} onChange={handlingName}
            />
          </div>
          <div>
            <label htmlFor="carNumber">carNumber: </label>
            <input
              id="carNumber" type="text" value={carNumber} onChange={handlingCarNumber}
            />
          </div>
          <div>
            <label htmlFor="type">type: </label>
            <input
              id="type" type="text" value={type} onChange={handlingType}
            />
          </div>
          <Button
            onClick={() => handlingCreateData()}
            type="primary"
            style={{
              marginBottom: 16,
            }}
          >
            Add a row
          </Button>
        </div>


        <Table rowKey='id' dataSource={data}>
          <Column title="ID" dataIndex="id" />
          <Column title="Name" dataIndex="name" />
          <Column title="Car_Num" dataIndex="car_number" />
          <Column title="Type" dataIndex="type" />
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