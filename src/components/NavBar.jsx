import { UserOutlined } from '@ant-design/icons';
import React from 'react';
import { Avatar, Space } from 'antd'; 
import { SideDrawer } from './Drawer';
import { AvatarMenu } from './AvatarMenu';

export const NavBar = () => {



  return (
    <div className='w-full flex justify-between'>
        
        <div className='p-3 sm:block hidden'>
            LOGO
        </div>

        <div className='p-4 sm:hidden'>
        <SideDrawer/>
        </div>

        <div>
        <AvatarMenu />
        </div>
    </div>
  )
}