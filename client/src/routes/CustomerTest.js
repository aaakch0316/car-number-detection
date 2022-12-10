import React, { useState } from 'react'
import Header from "../components/templates/Header";
import { Space, Table, Tag } from 'antd';
import { Button } from 'antd';

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





const CustomerTest = () => {
  const [dataSource, setDataSource] = useState([
  ]);

  // const handleDelete = (key) => {
  //   const newData = dataSource.filter((item) => item.key !== key);
  //   setDataSource(newData);
  // };

  const handleAdd = (event) => {
    const newData = {
      key: '5',
      firstName: 'Joe',
      lastName: 'Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['none', 'teacher'],
      in_out: 1
    };

    setDataSource([...dataSource, newData]);
    // setCount(count + 1);
    console.log(dataSource, newData)
  };

  const { Column, ColumnGroup } = Table;
  return (
    <Header>


      <main style={{ padding: "1rem 3rem" }}>
        <h2>Customer</h2>

        <Button
          onClick={handleAdd}
          type="primary"
          style={{
            marginBottom: 16,
          }}
        >
          Add a row
        </Button>

        <Table dataSource={data}>
          <ColumnGroup ColumnGroup title="Name" >
            <Column title="First Name" dataIndex="firstName" key="firstName" />
            <Column title="Last Name" dataIndex="lastName" key="lastName" />
          </ColumnGroup >
          <Column title="Age" dataIndex="age" key="age" />
          <Column title="Address" dataIndex="address" key="address" />
          <Column
            title="Tags"
            dataIndex="tags"
            key="tags"
            render={(tags) => (
              <>
                {tags.map((tag) => (
                  <Tag color="blue" key={tag}>
                    {tag}
                  </Tag>
                ))}
              </>
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
            title='Action'
            key='action'
            render={(_, record) => (
              <Space size="middle">
                Delete
              </Space>

            )}
          />
        </Table >
      </main >
    </Header >
  );


}

export default CustomerTest;