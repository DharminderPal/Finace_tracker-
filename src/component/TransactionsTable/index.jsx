import React from "react";
import { Table } from "antd";
import { useState } from "react";

function TransactionsTable({ transactions }) {
  const [search, setSearch] = useState("");
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: 'Tag',
      dataIndex: 'tag',
      key: 'tag',
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
  ];
let filtered =  transactions;
if(search){
  filtered = transactions.filter(item =>
  item.name.toLowerCase().includes(search.toLowerCase()));

  }
}
  return (
    <div style={{ marginTop: 20 }}>
      <Table 
        dataSource={transactions} 
        columns={columns} 
        rowKey="id" 
        pagination={false} 
      />
    </div>
  );


export default TransactionsTable;
