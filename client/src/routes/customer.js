import Header from "../components/templates/Header";
import { Space, Table, Tag, Button } from 'antd';
import { useState, useEffect } from "react";

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
  {
    key: '3',
    firstName: 'Jim',
    lastName: 'Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['VVIP', 'ower'],
    in_out: 0
  },
  {
    key: '4',
    firstName: 'Joe',
    lastName: 'Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['none', 'teacher'],
    in_out: 1
  },
];

export default function Customer() {
  const { Column, ColumnGroup } = Table;
  const [data, setData] = useState([])

  useEffect(() => {
    // db FETCH
    setData(dummyData)
  }, [])


  const handlingCreateData = (customer) => {
    console.log(customer)

    const update = [...data, customer]
    setData(update)
  }

  const handlingDeleteDate = (key) => {
    console.log(key)

    const update = data.filter((ob) => ob.key !== key)
    setData(update)
  }

  const [inputFirstName, setinputFirstName] = useState('');
  const [inputLastName, setinputLastName] = useState('');

  const firstnameHadler = (event) => {
    setinputFirstName(event.target.value)
  }
  const lastnameHadler = (event) => {
    setinputLastName(event.target.value)
  }

  return (
    <Header>
      <main style={{ padding: "1rem 3rem" }}>
        <h2>Customer</h2>
        <form onSubmit={handlingCreateData}>
          <label htmlFor="fristname">fristname</label>
          <input
            id="fristname" type="text" value={inputFirstName} onChange={firstnameHadler}
          /><br />
          <label htmlFor="lastname">lastname</label>
          <input
            id="lastname" type="text" value={inputLastName} onChange={lastnameHadler}
          />
        </form>

        <Button
          onClick={() => handlingCreateData(
            {
              key: Math.random().toString(),
              firstName: inputFirstName,
              lastName: inputLastName,
              age: 32,
              address: 'Sidney No. 1 Lake Park',
              tags: [inputLastName],
              in_out: 1
            },
            setinputFirstName(''),
            setinputLastName('')
          )}
          type="primary"
          style={{
            marginBottom: 16,
          }}
        >
          Add a row
        </Button>
        <Table dataSource={data}>
          <ColumnGroup title="Name">
            <Column title="First Name" dataIndex="firstName" key="firstName" />
            <Column title="Last Name" dataIndex="lastName" key="lastName" />
          </ColumnGroup>
          <Column title="Age" dataIndex="age" key="age" />
          <Column title="Address" dataIndex="address" key="address" />
          <Column
            title="Tags"
            dataIndex="tags"
            key="tags"
            render={(tags, _id) => (
              <div>
                {tags.map((tag) => (
                  <Tag color="blue" key={tag}>
                    {tag}
                  </Tag>
                ))}
              </div>
            )}
          />
          <Column
            title="Action"
            key="action"
            render={(_, record) => (
              <Space size="middle">
                {record.in_out ? 'IN' : 'OUT'}
              </Space>
            )}
          />
          <Column
            title='Delete'
            key='action'
            render={(tags, _id) => (
              <div onClick={() => handlingDeleteDate(_id.key)}>
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