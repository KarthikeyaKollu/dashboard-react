import React from 'react'
import { Card, Col, Row } from 'antd';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import BusinessIcon from '@mui/icons-material/Business';

export const Cards = () => {

  const homecards=[{title:"Total Profits",desc:"1000",logo:<LocalAtmIcon fontSize='small'/>,color:"text-blue-500 bg-blue-200"},
                   {title:"Total deals pending",desc:"32",logo:<PendingActionsIcon fontSize='small' />, color:"text-green-500 bg-green-200"},
                   {title:"Number of companies",desc:"64",logo:<BusinessIcon fontSize='small' />, color:"text-orange-500 bg-orange-200"},
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