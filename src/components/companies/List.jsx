import React, { useEffect, useState } from 'react';
import { Avatar, Button, Input, List, Skeleton, Tooltip } from 'antd';
import { Link } from 'react-router-dom';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

import { db } from '../firebaseConfig';
import { getDatabase, ref as refdb, remove ,get} from 'firebase/database';
import { useList } from '../../contexts/Context'

const { Search } = Input;

export const ListPage = () => {

  const contextList = useList();

  const [loading, setLoading] = useState(true);
  const [list, setList] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');


  useEffect(() => {
    setList(contextList.list)
    console.log(list)
    setLoading(false)
  })


  const deleteCompany = async (companyId) => {
    try {
      const companiesRef = refdb(db, `companies/${companyId}`);
      const snapshot = await get(companiesRef);
       const companyData = await snapshot.val();
      //await remove(companiesRef);
      console.log("Company deleted successfully!");
    } catch (error) {
      console.error("Error deleting company:", error);
    }
  };


  // Filter list based on search query
  const filteredList = list.filter(item =>
    `${item.Name} `.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className='flex justify-between'>
        <Search
          placeholder="Search..."
          allowClear
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ width: 200, marginBottom: 12 }}
        />
        <Link to={"/createcompany"}><Button type=''>create</Button></Link>
      </div>
      <List
        className="demo-loadmore-list"
        itemLayout="horizontal"
        dataSource={filteredList}
        renderItem={item => (
          <List.Item
            actions={[<Tooltip title="Edit" color={"blue"} key={"blue"}><a href={`/editcompany/${item.id}`} key="list-loadmore-edit"><EditOutlinedIcon/></a></Tooltip>, <Tooltip title="Delete" color={"red"} key={"red"}><a key="list-loadmore-more" onClick={()=>{deleteCompany(item.id)}} ><DeleteOutlineOutlinedIcon/></a></Tooltip>]}
          >
            <Skeleton avatar title={false} loading={loading} active>
              <List.Item.Meta
                avatar={<Avatar src={item.image} />}
                title={<a href="https://ant.design">{item.Name}</a>}
                description={item.description}
              />
            </Skeleton>
          </List.Item>
        )}
      />
    </div>
  );
};
