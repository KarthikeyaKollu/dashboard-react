import React, { useState, useEffect } from 'react';
import { Badge, Calendar, Modal, Form, Input, Button, Radio } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import { getDatabase, ref as refdb, set, onValue, get } from 'firebase/database';
import { db } from '../firebaseConfig'
import { useList } from '../../contexts/Context'
export const CalenderComponent = () => {
    const [visible, setVisible] = useState(false);
    const [task, setTask] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [tasks, setTasks] = useState([]);
    const [type, setType] = useState('');
    const contextList = useList();


    const uploadData = async (values) => {
        console.log("uploading....")
        try {
            // Construct the data object to be uploaded
            const data = {

                ...values
            };

            // Get a reference to the Realtime Database
            // const db = getDatabase();
            // Define the path where you want to store the data
            const companiesRef = refdb(db, `tasks`);

            // Upload the data to the database
            await set(companiesRef, data);

            console.log("Data uploaded successfully!");
        } catch (error) {
            console.error("Error uploading data:", error);
        }
    }


    useEffect(() => {
        // setTasks(contextList.tasks)
        console.log(contextList.tasks)
        setTasks(contextList.tasks)
        
    }, [contextList.tasks])



    
    useEffect(() => {
        if (tasks.length > 0) {
            uploadData(tasks);
        }
    }, [tasks]);










    const handleAddTask = () => {
        const newTask = { date: selectedDate, type: type, content: task };
        console.log(contextList.tasks)
        setTasks([...tasks, newTask]);
        
        uploadData(tasks)
        setVisible(false);
    };

    const handleCancel = () => {
        setVisible(false);
    };

    const handleDateClick = (value) => {
        setSelectedDate(value.format('YYYY-MM-DD'));
        setVisible(true);
    };

    const dateCellRender = (value) => {
        const listData = getListData(value);
        return (
            <ul className="events" >
                {listData.map((item, index) => (
                    <li key={index}>
                        <Badge status={item.type} text={item.content} />
                    </li>
                ))}
                <li>
                    <Button type="link" onClick={() => handleDateClick(value)}>
                        Add Task
                    </Button>
                </li>
            </ul>
        );
    };

    const getListData = (value) => {
        const tasksForDate = tasks.filter((task) => task.date === value.format('YYYY-MM-DD'));
        return tasksForDate;
    };

    return (
        <>
            <Calendar dateCellRender={dateCellRender} />
            <Modal
                title="Add Task"
                visible={visible}
                onCancel={handleCancel}
                footer={[
                    <Button key="cancel" onClick={handleCancel}>
                        Cancel
                    </Button>,
                    <Button key="submit" type="primary" onClick={handleAddTask}>
                        Add Task
                    </Button>,
                ]}
            >
                <Form layout="vertical">
                    <Form.Item label="Task">
                        <Input value={task} onChange={(e) => setTask(e.target.value)} />
                    </Form.Item>
                    <FormItem>
                        <Radio.Group onChange={(e) => { setType(e.target.value) }} value={type}>
                            <Radio value={"success"}>Green</Radio>
                            <Radio value={"error"}>Red</Radio>
                            <Radio value={"warning"}>Orange</Radio>

                        </Radio.Group>
                    </FormItem>
                </Form>
            </Modal>
            <div onClick={uploadData}><button> save </button></div>
        </>
    );
};


