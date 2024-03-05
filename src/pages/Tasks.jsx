import React from 'react'
import { CalenderComponent } from "../components/tasks/Calender"
import { Card } from 'antd';
export default function Tasks() {
  return (
    <div className='p-4'>
      <Card bordered={false}>

        <CalenderComponent />

      </Card>
    </div>
  )
}