import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router';

import {
  Button,
  Cascader,
  Checkbox,
  ColorPicker,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Slider,
  Switch,
  TreeSelect,
  Upload,
} from 'antd';

import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { db, storage } from "../firebaseConfig"

import { ref as refdb, set } from 'firebase/database';
import { v4 as uuidv4 } from 'uuid';

import {Notification} from "../Notification"
import AddBusinessIcon from '@mui/icons-material/AddBusiness';

const { RangePicker } = DatePicker;
const { TextArea } = Input;
const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

export const CreateCompany = ({ }) => {
  const [imageUrl, setImageUrl] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [alert, setAlert] = useState(false);

  const navigate = useNavigate();

  const handleDateChange = (date, dateString) => {
    setSelectedDate(dateString);
    console.log(dateString)
  };
  async function uploadImageToFirebase(imageFile) {
    try {
      // Create a reference to the image file's location in Storage
      // const storage = getStorage();
      const storageRef = ref(storage, `company_logos/${imageFile.name}`);

      // Start the upload task
      const uploadTask = uploadBytesResumable(storageRef, imageFile);

      // Track upload progress (optional)
      uploadTask.on('state_changed',
        (snapshot) => {
          const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          console.log(`Upload is ${progress}% done`);
        },
        (error) => {
          console.error('Image upload failed:', error);
          throw error; // Re-throw to allow for error handling in the calling code
        },
        () => {
          // Get the download URL of the uploaded image
          getDownloadURL(uploadTask.snapshot.ref)
            .then((downloadURL) => {
              setImageUrl(downloadURL)
              return downloadURL; // Return the download URL for further use
            });
        }
      );

    } catch (error) {
      console.error("Error uploading image:", error);
      throw error; // Re-throw to allow for error handling where the function is used
    }
  }

  const uploadData = async (values) => {
    console.log("uploading....")
    const uuid = uuidv4()
    try {
      // Construct the data object to be uploaded
      const data = {

        ...values,
        image: imageUrl,
        id: uuid,
        date: selectedDate
      };

  
      const companiesRef = refdb(db, `companies/${uuid}`);

      // Upload the data to the database
      await set(companiesRef, data);

      console.log("Data uploaded successfully!");
      setAlert(true)
      setTimeout(() => {
        navigate("/companylist");
      }, 2000);
      
    } catch (error) {
      console.error("Error uploading data:", error);
      setAlert(false)
    }
  }

  const onFinish = async (values) => {
   console.log(values)
   uploadData(values)

  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="91">+91</Option>
      </Select>
    </Form.Item>
  );

  return (
    <>
      <div className='pb-6 md:p-3 md:pb-9 text-2xl font-semibold flex items-center gap-1 text-blue-400'><AddBusinessIcon/>Add a Company</div>
      <Form

        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        disabled={false}
        style={{
          maxWidth: 1000,
        }}
        onFinish={onFinish}
        className='mx-auto h-screen'
      >
        <Form.Item
          label="Upload Company Logo"

          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <Upload action={(e) => { uploadImageToFirebase(e) }} listType="picture-card" maxCount={1}>
            <button
              style={{
                border: 0,
                background: 'none',
              }}
              type="button"
            >
              <PlusOutlined />
              <div
                style={{
                  marginTop: 8,
                }}
              >
                Upload
              </div>
            </button>
          </Upload>
        </Form.Item>
        <Form.Item label="Company Name" name="Name" >
          <Input className='sm:w-[50%] w-[60%]' />
        </Form.Item>
        <Form.Item label="Description" name="description">
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item label="Date">
          <DatePicker onChange={handleDateChange} />
        </Form.Item>
        {/* <Form.Item label="Date Range" name="rangePicker">
          <RangePicker />
        </Form.Item> */}
        <Form.Item label="Amount in Rupees" name="amount">
          <InputNumber />
        </Form.Item>
        <Form.Item label="Email ID" name="emailid" rules={[{ type: 'email' }]}>
          <Input className='sm:w-[40%] w-[50%]' />
        </Form.Item>
        <Form.Item
          name="phone"
          label="Phone Number"
          rules={[{ required: true, message: 'Please input your phone number!' }]}
        >
          <Input addonBefore={prefixSelector} className='sm:w-[40%] w-[50%]' />
        </Form.Item>

   
         
            <Button type="" htmlType="submit">
               Submit
          </Button>
       

          {alert &&  <Notification type={"success"} message={"Created successfully!"} /> }
       
           </Form>
       
      
    </>
  );
};