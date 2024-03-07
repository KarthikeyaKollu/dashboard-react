import React from 'react'
import { Card, Col, Row } from 'antd';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import BusinessIcon from '@mui/icons-material/Business';
import {useList} from "../../contexts/Context"

export const Cards = () => {

  const data= useList()
  const nofCompanies= data.list.length
  const totalAmount = data.list.reduce((total, item) => total + item.amount, 0);
  const formattedTotalAmount = totalAmount.toLocaleString('en-IN', { style: 'currency', currency: 'INR' });


  const homecards=[{title:"Total Profits",desc:formattedTotalAmount,logo:<LocalAtmIcon fontSize='small'/>,color:"text-blue-500 bg-blue-200"},
                   {title:"Total deals pending",desc:"32",logo:<PendingActionsIcon fontSize='small' />, color:"text-green-500 bg-green-200"},
                   {title:"Number of companies",desc:nofCompanies,logo:<BusinessIcon fontSize='small' />, color:"text-orange-500 bg-orange-200"},
  ]




  return (
    <div className='' >
      <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]} justify={"center"}>
        
       {homecards.map((item,index)=>(<Col key={index} xs={24} sm={8} >
          <Card bordered={false} className='flex flex-col'>
            <div className='absolute flex space-x-4 top-0 left-0 p-3 ml-2 font-semibold text-lg '>
              <div className={`${item.color} size-7 flex justify-center items-center rounded-full `}>
                {item.logo}
              </div>
              <h2>{item.title}</h2>
            </div>
            <div className='flex mt-5 ml-9 h-6 text-3xl font-bold '>
              {item.desc}
            </div>
          </Card>
        </Col>))}
      </Row>
    </div>

  )
}