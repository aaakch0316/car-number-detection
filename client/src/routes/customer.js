import Header from "../components/templates/Header";
import { Space, Table, Tag, Button } from 'antd';
import { useState, useEffect } from "react";
import axios from 'axios'


const test = {
  borderRadius: '5px',
  backgroundColor: '#ffffff',
  width: '100px'
}

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
      if (username && carNumber && type && grade) {
        console.log(username, carNumber, type, grade)
        const res = await axios.post('http://localhost:3005/customer', {
          username: username,
          type: type,
          carNumber: carNumber,
          grade: grade
        })
        console.log(res.data)
        console.log(res.data.data)
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

  const [username, setName] = useState('');
  const [carNumber, setCarNumber] = useState('');
  const [type, setType] = useState('');
  const [grade, setGrade] = useState('');

  const handlingName = (event) => {
    setName(event.target.value)
  }
  const handlingCarNumber = (event) => {
    setCarNumber(event.target.value)
  }
  const handlingType = (event) => {
    setType(event.target.value)
  }
  const handlingGrade = (event) => {
    setGrade(event.target.value)
  }
  return (
    <Header>
      <main style={{ padding: "1rem 3rem" }}>
        <h2>Customer</h2>
        <div style={{
          display: 'flex',
          // flexDirection: 'column',
          justifyContent: 'space-around',
          width: '100%',
          marginBottom: '10px',
          border: '1px solid #ebebeb',
          borderRadius: '10px',
          backgroundColor: '#fafafa',
          marginTop: '3px',
          paddingTop: '20px',

        }}>
          <div>
            <label htmlFor="username">Name </label>
            <input style={test}
              id="username" type="text" value={username} onChange={handlingName}
            />
          </div>
          <div>
            <label htmlFor="carNumber">CarNumber </label>
            <input style={test}
              id="carNumber" type="text" value={carNumber} onChange={handlingCarNumber}
            />
          </div>
          <div>
            <label htmlFor="type">Type </label>
            <input style={test}
              id="type" type="text" value={type} onChange={handlingType}
            />
          </div>
          <div>
            <label htmlFor="grade">grade </label>
            <input style={test}
              id="grade" type="text" value={grade} onChange={handlingGrade}
            />
          </div>
          <div>
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
        </div>

        <Table rowKey='id' dataSource={data} maxWidth="70vh">
          <Column title="ID" dataIndex="id" />
          <Column title="Name" dataIndex="username" />
          <Column title="Car_Num" dataIndex="carNumber" />
          <Column title="Type" dataIndex="type" />
          <Column title="Grade" dataIndex="grade" />
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