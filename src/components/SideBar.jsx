import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import { Button } from 'antd';
import BusinessIcon from '@mui/icons-material/Business';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import HomeIcon from '@mui/icons-material/Home';
import AssignmentIcon from '@mui/icons-material/Assignment';

export const SideBar = ({onOptionClick}) => {
    const location = useLocation();
    const sidebar = [
        { title: "Home", link: "/", image: <HomeIcon /> },
        { title: "Companies", link: "/companylist", image: <BusinessIcon /> },
        { title: "Add Company", link: "/createcompany", image: <AddBusinessIcon /> },
        { title: "Tasks", link: "/tasks", image: <AssignmentIcon /> },

    ]

    const handleOptionClick = () => {
        if (onOptionClick) {
            onOptionClick();
        }
    };

    return (
        <div className='flex flex-col gap-3 p-2'>

            {sidebar.map((item, index) => (

                <Link to={item.link} key={index}>

                    <div
                        className={`${location.pathname == item.link ? "bg-blue-200 text-blue-700" : ""}  rounded-lg p-3 w-[240px]  flex justify-start gap-5 `}
                        onClick={handleOptionClick}
                    >
                        <div className='pl-6' >{item.image}</div> <span>{item.title}</span>
                    </div>

                </Link>


            ))
            }



        </div >
    )
}

