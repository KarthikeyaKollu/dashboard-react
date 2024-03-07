import React, { useEffect, useState } from 'react';
import { Avatar, Button, List, Skeleton } from 'antd';
import {db} from '../firebaseConfig'
import { getDatabase, ref as refdb, set, onValue,get } from 'firebase/database';
import {useList} from '../../contexts/Context'
import {CompanySkeleton} from "../Skeletons"

export const ListPage = () => {


  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);


  const contextList=useList()
  useEffect(()=>{
    setList(contextList.list)
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    //
    setInitLoading(false)
  })

  return (
    <List
      className="demo-loadmore-list"
      loading={initLoading}
      itemLayout="horizontal"
     
      dataSource={list}
      renderItem={(item) => (
        <List.Item>
          <Skeleton loading={loading} active avatar paragraph={{rows:2,width:1000}}>
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
