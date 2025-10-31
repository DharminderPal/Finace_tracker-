import React from "react";
import { Button, Card, Col, Modal, Form, Input, DatePicker, Select } from 'antd';

function AddIncomeModal({ isIncomeModelVisible, handleIncomeCancel, onFinish }) {
    const [form] = Form.useForm();

    return (
        <Modal
            title="Add Income"
            open={isIncomeModelVisible}
            onCancel={handleIncomeCancel}
            footer={null}
        >
            <Form form={form} layout="vertical" onFinish={(values) => {
                onFinish(values,"income");
                form.resetFields();
            }}> 
            <Input type="text" className="custom-input"/>
                <Form.Item 
                    label="Amount" 
                    name="amount"
                    rules={[{ required: true, message: 'Please input amount!' }]}
                >
                    <Input type="number"  className="custom-input" />
                </Form.Item>
                <Form.Item 
                    label="Date" 
                    name="date"
                    rules={[{ required: true, message: 'Please select date!' }]}
                >
                    <DatePicker style={{ width: '100%' }} />
                </Form.Item>
                <Form.Item 
                    label="Category" 
                    name="category"
                    rules={[{ required: true,
                 message: 'Please select category!' }]}
                >
                    <Select>
                        <Select.Option value="salary">Salary</Select.Option>
                        <Select.Option value="freelance">Freelance</Select.Option>
                        <Select.Option value="investment">Investment</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" block>
                        Add Income
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    );
}

export default AddIncomeModal;


    


