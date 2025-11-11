import React, { useState } from "react";
import { Table ,Select } from "antd";

function TransactionsTable({ transactions }) {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
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
  let filtered = transactions;
  if (search) {
    filtered = transactions.filter(item =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  }
  return (



    <div style={{ marginTop: 20 }}>

      <input    value={search}
      onChange={(e)=>setSearch(e.target.value)}
       placeholder="search Transection "/>


<Select

class Level="large"
onChange={(e)=>setTypeFilter(e)}
value={typeFilter}
placeholder="Filter by Type"
allowClear
>

  <Option value="income">Income</Option>
  <Option value="">All</Option>
  <Option value="expense">Expense</Option>
  
</Select>
      <Table 
        dataSource={filtered} 
        columns={columns} 
        rowKey="id" 
        pagination={false} 
      />
    </div>
  );
}

export default TransactionsTable;
