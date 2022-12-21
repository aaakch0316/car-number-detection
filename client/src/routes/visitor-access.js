import Header from "../components/templates/Header";
import { Space, Table, Tag } from 'antd';
import dummy from "./dummyinout.json"
import axios from 'axios'

const dummyData = dummy

export default function VisitorAccess() {
  const { Column, ColumnGroup } = Table;

  return (
    <Header>
      <main style={{ padding: "1rem 3rem" }}>
        <h2>Visitor Access</h2>
        <Table rowKey='id' dataSource={dummyData}>
          <Column title="id" dataIndex="id" key='id' />
          <ColumnGroup title="date">
            <Column title="year" dataIndex="year" key="id" />
            <Column title="month" dataIndex="month" key="id" />
            <Column title="day" dataIndex="day" key="id" />
            <Column title="weekday" dataIndex="weekday" key="id" />
          </ColumnGroup>
          <Column title="car_number" dataIndex="car_number" key="id" />
          <Column title="username" dataIndex="username" key="id" />
          <Column
            title="grade"
            dataIndex="grade"
            key="id"
            render={(grade) => (
              <Tag color="blue" key={grade}>
                {grade}
              </Tag>
            )}
          />
          <Column
            title="Action"
            key="id"
            render={(_, record) => (
              <Space size="middle">
                {record.in_out ? 'IN' : 'OUT'}
              </Space>
            )}
          />
        </Table>
      </main>
    </Header >
  );
}