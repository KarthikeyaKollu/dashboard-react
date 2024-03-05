import React from 'react'
import { Card } from 'antd';
import EventIcon from '@mui/icons-material/Event';

export const Graph = () => {
  return (
    <Card title={<div><EventIcon/> Upcoming Events</div>} bordered={false} style={{ width: "100%" }}>
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
  </Card>
  )
}


