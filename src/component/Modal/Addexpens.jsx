import React from "react";

import{Button,
    Modal,
    Form,
    Input,
    DatePicker,
    Select} from 'antd';

function AddExpenseModal({
isExpenseModelVisible,
handleExpenseCancel,
onFinish,
}){
    const {form} =Form.useForm();
    return(
<Modal
style={{fontweight:600}}
title="Add Expense"
visible={isExpenseModelVisible}
onCancel={handleExpenseCancel}
footer={null}
>

<Form
form={form}
layout="vertical"
onFinish={(values)=>{
onFinish(values,'expense');
form.resetFields();
}}
>
{/* 10/17/2025 */}

<Form.Item
label="Title"
name="title"
rules={[{ required: true, message: 'Please enter a title' }]}
>

<Input placeholder="Enter expense title" />
</Form.Item>
<Form.Item
label="Amount"
name="amount"
rules={[{ required: true, message: 'Please enter an amount' }]}
>

<Input placeholder="Enter expense amount" />
</Form.Item>
<Form.Item
label="Date"
name="date"
rules={[{ required: true, 
    message: 'Please select a date' }]}

>
<DatePicker style={{ width: '100%' }} />
</Form.Item>
<Form.Item
label="Category"
name="category"
rules={[{ required: true, message: 'Please select a category' }]}

>
<Select placeholder="Select a category">
<Select.Option value="food">Food</Select.Option>
<Select.Option value="transport">Transport</Select.Option>
<Select.Option value="entertainment">Entertainment</Select.Option>
</Select>
</Form.Item>
<Form.Item>
<Button type="primary" htmlType="submit">
Add Expense
</Button>
</Form.Item>
</Form>
</Modal>
)
}


export default AddExpenseModal;

