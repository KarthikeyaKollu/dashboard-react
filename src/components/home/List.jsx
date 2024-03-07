import React, { useEffect, useState } from 'react';
import { Avatar, Button, List, Skeleton } from 'antd';
import {db} from '../firebaseConfig'
import { getDatabase, ref as refdb, set, onValue,get } from 'firebase/database';
import {useList} from '../../contexts/Context'
export const ListPage = () => {


  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);


  const contextList=useList()
  useEffect(()=>{
    setList(contextList.list)
    console.log(list)
    setLoading(false)
    setInitLoading(false)
  })

  return (
    <List
      className="demo-loadmore-list"
      loading={initLoading}
      itemLayout="horizontal"
      // loadMore={loadMore}
      dataSource={list}
      renderItem={(item) => (
        <List.Item>
          <Skeleton avatar title={false} loading={item.loading} active>
            <List.Item.Meta
              avatar={<Avatar src={item.image} />}
              title={<a href="https://ant.design">{item.Name}</a>}
              description={item.description}
            />
          </Skeleton>
        </List.Item>
      )}
    />
  
  );
};
