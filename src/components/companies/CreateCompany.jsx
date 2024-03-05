import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import {
  Button,
  Cascader,
  Checkbox,
  ColorPicker,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Slider,
  Switch,
  TreeSelect,
  Upload,
} from 'antd';

const { RangePicker } = DatePicker;
const { TextArea } = Input;
const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

export const CreateCompany = ({}) => {

  const onFinish = (values) => {
    console.log('Form values:', values);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="91">+91</Option>
      </Select>
    </Form.Item>
  );

  return (
    <>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        disabled={false}
        style={{
          maxWidth: 1000,
        }}
        onFinish={onFinish}
        className='mx-auto h-screen'
      >
        <Form.Item
          label="Upload Company Logo"
          name="upload"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <Upload action="/upload.do" listType="picture-card" maxCount={1}>
            <button
              style={{
                border: 0,
                background: 'none',
              }}
              type="button"
            >
              <PlusOutlined />
              <div
                style={{
                  marginTop: 8,
                }}
              >
                Upload
              </div>
            </button>
          </Upload>
        </Form.Item>
        <Form.Item label="Company Name" name="input" >
          <Input className='sm:w-[50%] w-[60%]' />
        </Form.Item>
        <Form.Item label="Description" name="description">
        <TextArea rows={4} />
        </Form.Item>
        <Form.Item label="Date" name="datePicker">
          <DatePicker />
        </Form.Item>
        <Form.Item label="Date Range" name="rangePicker">
          <RangePicker />
        </Form.Item>
        <Form.Item label="Amount in Rupees" name="inputNumber">
          <InputNumber />
        </Form.Item>
        <Form.Item label="Email ID" name="emailid" rules={[{ type: 'email' }]}>
          <Input className='sm:w-[40%] w-[50%]' />
        </Form.Item>
        <Form.Item
        name="phone"
        label="Phone Number"
        rules={[{ required: true, message: 'Please input your phone number!' }]}
        >
        <Input addonBefore={prefixSelector} className='sm:w-[40%] w-[50%]' />
        </Form.Item>
        <Form.Item label="ColorPicker" name="colorPicker">
          <ColorPicker />  <Button type="" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
       
      </Form>
    </>
  );
};