import React from 'react'
import { Card, Col, Row } from 'antd';
export const Cards = () => {
  return (
    <div className='' >
      <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]} justify={"center"}>
        
       {[1,2,3].map((item,index)=>(<Col key={index} xs={24} sm={8} >
          <Card bordered={false}>
            <div>hello</div>
            <div>10</div>
          </Card>
        </Col>))}
      </Row>
    </div>

  )
}



