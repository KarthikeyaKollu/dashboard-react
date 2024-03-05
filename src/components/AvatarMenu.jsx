import { useState } from 'react';
import { Button, Drawer, Space, Avatar, Input, Form } from 'antd';
import { UserOutlined } from '@ant-design/icons';
// import avatar from "../assets/avatar.jpg"

export const AvatarMenu = () => {
  const [open, setOpen] = useState(false);
  const placement = 'right';

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleSidebarOptionClick = () => {
    onClose();
  };

  const menucontents=[
    {title:"My Profile", link:""},
    {title:"Account Settings", link:""},
    {title:"Logout", link:""},
    ]

  return (
    <>
      <div className='p-3' onClick={showDrawer}>
        <Space direction="vertical" size={16}/>
        <Space wrap size={16}>
          <Avatar size="large" icon={<UserOutlined />} />
        </Space>
      </div>
      <Drawer
        title="Account Settings"
        placement={placement}
        width={500}
        onClose={onClose}
        open={open}
      >
       <div className=''>

        {/* <img src={avatar} alt="" width={100} className='mx-auto'/> */}

        <Form
        labelCol={{
          span: 6,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        disabled={false}
        style={{
          maxWidth: 600,
        }}
        className='p-3'
      >
        <Form.Item label="Full Name" name="input" >
          <Input/>
        </Form.Item>
        <Form.Item label="Jobe Role" name="input" >
          <Input/>
        </Form.Item>
        <Form.Item label="Email ID" name="emailid" rules={[{ type: 'email' }]}>
          <Input/>
        </Form.Item>
        <Form.Item
        name="phone"
        label="Phone Number"
        rules={[{message: 'Please input your phone number!' }]}
        >
        <Input/>
        </Form.Item>
        <Form.Item>
          <Button type="" htmlType="submit" className='absolute right-0'>
            Save
          </Button>
        </Form.Item>
      </Form>

       </div>

      </Drawer>
    </>
  );
};