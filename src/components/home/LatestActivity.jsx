import React from 'react'
import { ListPage } from "./List"
import { Card, Col, Row } from 'antd';
export const LatestActivity = () => {
  return (
    <div className='p-3'>
      <Card bordered={false}>
      <ListPage/>
      </Card>
    </div>
  )
}