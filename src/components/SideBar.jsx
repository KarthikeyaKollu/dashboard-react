import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import { Button } from 'antd';
import { DashboardOutlined } from '@ant-design/icons'
export const SideBar = () => {
    const location = useLocation();
    const sidebar = [
        { title: "Home", link: "/", image: <DashboardOutlined /> },
        { title: "Companies", link: "/companylist", image: <DashboardOutlined /> },
        { title: "Page2", link: "/createcompany", image: <DashboardOutlined /> },

    ]
    return (
        <div className='flex flex-col gap-3 p-2'>

            {sidebar.map((item, index) => (

                <Link to={item.link} key={index}>

                    <div
                        className={`${location.pathname == item.link ? "bg-blue-200 text-blue-700" : ""}  rounded-lg p-3 w-[240px]  flex justify-start gap-5 `}
                    >
                        <div className='pl-6' >{item.image}</div> <span>{item.title}</span>
                    </div>

                </Link>


            ))
            }



        </div >
    )
}

