import react from "react";
import { Table } from "antd";
function TransationsTable( transactions ){
       const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'amount',
    dataIndex: 'amount',
    key: 'amount',
  },
  {
    title: 'tag',
    dataIndex: 'tag',
    key: 'tag',
  },
  {
    title: 'type',
    dataIndex: 'type',
    key: 'type',
  },
   {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
 
];

<Table dataSource={transactions} columns={columns} />;
    return(
<></>
    )

    

}


export default TransationsTable;