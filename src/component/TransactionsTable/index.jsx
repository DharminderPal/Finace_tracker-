import React, { useState } from "react";
import { Table ,Select } from "antd";

function TransactionsTable({ transactions }) {

  const { Option } = Select;
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [sortKey, setSortKey] = useState("");
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
  
  // <---------------------------[...filtered]  you can study about  this  ok i  all about it --------->
  const sortedTransactions = [...filtered].sort((a, b) => {
    if (sortKey === "date") {
      return new Date(a.date) - new Date(b.date);
    } else if (sortKey === "amount") {
      return a.amount - b.amount;
    } else {
      return 0;
    }
  });


//using function here 

function importcsv(event){
  event.preventDefault();

try{
  parse(event.target.files[0],{
header:true,
complete: async function (results){
  console
  .log("Results:",results);
}});
toast.success("File imported successfully");
fetchTransactions();
event.target.value =null;
 }catch(e){
    toast.error(e.message);
  }
}













function exportcsv(){  /**/ 
  var csv = unparse({
    fiedls: ['name','type','tag','date' ,'amount' ],
 transactions:sortedTransactions,
  })
  const blob =new Blob([csv],{type: 'text/csv;charset=utf-8;'});
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "transactions.csv";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

return (
    <div style={{ marginTop: 20 }}>
      <div style={{ marginBottom: 16 }}>
        <button onClick={exportcsv} style={{ marginRight: 8 }}>
          Export CSV
        </button>
        <label htmlFor="import-csv">
          <button component="span" style={{ marginRight: 8 }}>
            Import CSV
          </button>
        </label>
        <input
          id="import-csv"
          type="file"
          accept=".csv"
          onChange={importcsv}
          style={{ display: "none" }}
        />
      </div>

      <input    value={search}
      onChange={(e)=>setSearch(e.target.value)}
       placeholder="search Transection "/>

      <Select
        value={typeFilter}
        onChange={(e)=>setTypeFilter(e)}
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
