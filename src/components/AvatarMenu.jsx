import { useState } from 'react';
import { Button, Drawer, Space, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

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
    {title:"Companies", link:""}
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
        title="User"
        placement={placement}
        width={300}
        onClose={onClose}
        open={open}
      >
        {menucontents.map((item,index) => (
            <li key={index}>
                {item.title}
            </li>
        ))
        }
        
      </Drawer>
    </>
  );
};