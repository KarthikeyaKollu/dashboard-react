import React from 'react'
import { Card } from 'antd';
import SsidChartIcon from '@mui/icons-material/SsidChart';

export const UpcommingEvents = () => {
  return (
    <Card title={<div><SsidChartIcon/> Graph</div>} bordered={false} style={{ width: "100%" }}>
      <p>Card</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  )
}


