import React from 'react'
import { ListPage } from "./List"
import { Card, Col, Row } from 'antd';
export const LatestActivity = () => {
  return (
    <div className='p-3'>
     <Card title={<div>LatestActivity</div>} bordered={false} style={{ width: "100%" }}>
      <ListPage/>
      </Card>
    </div>
  )
}