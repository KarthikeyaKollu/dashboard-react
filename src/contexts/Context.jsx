import React, { createContext, useState,useContext ,useEffect } from 'react';
import {db} from '../components/firebaseConfig'
import { ref as refdb,get } from 'firebase/database';
// Create context
export const ListContext = createContext();

export const useList=()=>{
  const data = useContext(ListContext)
  return data
}

// Create provider component
export const ListProvider = ({ children }) => {
  const [list, setList] = useState([]);
  const [tasks, setTasks] = useState([]);
  
  async function readDataOnce() {
    const companiesRef = refdb(db, 'companies');
    try {
      const snapshot = await get(companiesRef);
      const companies = snapshot.val();

      if (companies) {
        const companiesList = Object.values(companies).map(item => ({
          ...item,
          // Add timestamp property
          timestamp: item.timestamp ? item.timestamp : null // If timestamp already exists, keep it, otherwise set it to null
        }));
        setList(companiesList);
        //setLoading(false);
        console.log(list);
      }
    } catch (error) {
      console.error('Error fetching companies:', error);
    }
  }
  async function readTaskOnce() {
    const companiesRef = refdb(db, 'tasks');
    try {
      const snapshot = await get(companiesRef);
      const companies = snapshot.val();

      if (companies) {
        const List = Object.values(companies).map(item => ({
          ...item,
          // Add timestamp property
          timestamp: item.timestamp ? item.timestamp : null // If timestamp already exists, keep it, otherwise set it to null
        }));
        setTasks(List,"tasks");
        //console.log(tasks)
  

      }
    } catch (error) {
      console.error('Error fetching companies:', error);
    }
  }



  useEffect(() => {
    readDataOnce();
    readTaskOnce()
    console.log("called")
  },[]);




  return (
    <ListContext.Provider value={{ list, setList,tasks,setTasks }}>
      {children}
    </ListContext.Provider>
  );
};
