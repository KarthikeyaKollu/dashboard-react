import React from 'react'
import { Card, List, Avatar } from 'antd';
import EventIcon from '@mui/icons-material/Event'
import {useList} from '../../contexts/Context'
import { Badge, Calendar, Modal, Form, Input, Button, Radio } from 'antd';

export const UpcommingEvents = () => {

  const contextList = useList();
  const data =contextList.tasks
  console.log(contextList.tasks)
  
  return (
   <Card title={<div><EventIcon/> Upcoming Events</div>} bordered={false} style={{ width: "100%",height:"550px"}} className='relative overflow-y-auto hide-scrollbar'>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item, index) => (
          <List.Item>
            <List.Item.Meta
              title={ <Badge status={item.type} text={item.date} />}
              description={item.content}
              
            />
          </List.Item>
        )}
      />
    </Card>
  )
}


