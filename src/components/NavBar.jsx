import { UserOutlined } from '@ant-design/icons';
import React from 'react';
import { Avatar, Space } from 'antd'; 
import { SideDrawer } from './Drawer';
import { AvatarMenu } from './AvatarMenu';
import logo from "../constants/logo.png"

export const NavBar = () => {



  return (
    <div className='w-full flex justify-between'>
        
        <div className='p-2 sm:block hidden'>
            <img src={logo} alt="" width={80} />
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