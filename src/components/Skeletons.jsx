import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { Avatar, List, Skeleton, Switch } from 'antd';

const listData = Array.from({
  length: 1,
}).map((_, i) => ({
  href: 'https://ant.design',
  title: `ant design part ${i + 1}`,
  avatar: `https://api.dicebear.com/7.x/miniavs/svg?seed=${i}`,
  description:
    'Ant Design, a design language for background applications, is refined by Ant UED Team.',
}));

export const CompanySkeleton = () => {
  const [loading, setLoading] = useState(true);
  const onChange = (checked) => {
    setLoading(!checked);
  };
  return (
    <>
      <List
        itemLayout="vertical"
        size="large"
        dataSource={listData}
        renderItem={(item) => (
          <List.Item
            key={item.title}
            
            
          >
            <Skeleton active avatar paragraph={{rows:2,width:1000}}/>
             
             
            
          </List.Item>
        )}
      />
    </>
  );
};