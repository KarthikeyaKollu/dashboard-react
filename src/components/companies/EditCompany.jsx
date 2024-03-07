import React, { useState, useEffect } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, DatePicker, Form, Input, InputNumber, Upload } from 'antd';
import { ref as refdb, get, set } from 'firebase/database';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../firebaseConfig';
import { useParams } from 'react-router-dom';
const { TextArea } = Input;

const normFile = (e) => {
    if (Array.isArray(e)) {
        return e;
    }
    return e?.fileList;
};

export const UpdateCompany = () => {
    const [imageUrl, setImageUrl] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);

    const [data, setData] = useState(null);
    const { id } = useParams();
    const companyId = id;
    useEffect(() => {
        const fetchData = async () => {
            try {
                const companyRef = refdb(db, `companies/${companyId}`);
                const snapshot = await get(companyRef);
                const companyData = snapshot.val();

                if (companyData) {
                    setImageUrl(companyData.image);
                    setSelectedDate(companyData.date);
                    setData(companyData);
                    setImageUrl(data.image)
                    console.log(data)
                }
            } catch (error) {
                console.error("Error fetching company data:", error);
            }
        };
        fetchData();
    }, [companyId]);

    const handleDateChange = (date, dateString) => {
        setSelectedDate(dateString);
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

    async function updateCompanyData(values) {
        try {
            if (values.logo && values.logo[0]?.originFileObj) {
                await updateImageToFirebase(values.logo[0].originFileObj);
            }

            const updatedData = {
                ...values,
                image: imageUrl || (values.logo && values.logo[0]?.originFileObj) ? imageUrl : null,
                date: selectedDate
            };

            const companyRef = ref(db, `companies/${companyId}`);
            await set(companyRef, updatedData);

            console.log("Company updated successfully!");
        } catch (error) {
            console.error("Error updating company:", error);
        }
    }

    const onFinish = async (values) => {
        console.log("Updating company:", values);
        await updateCompanyData(values);
    };

    return (
        <div>
            {data && <Form
                initialValues={data}
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout="horizontal"
                onFinish={onFinish}
                className='mx-auto h-screen'
            >
                <Form.Item
                    label="Upload Company Logo"
                    valuePropName="fileList"
                    getValueFromEvent={normFile}
                >
                    <Upload
                        action={(e) => { uploadImageToFirebase(e) }} listType="picture-card"
                        maxCount={1}
                        fileList={[
                            {
                                uid: '-1',
                                name: 'image.png',
                                status: 'done',
                                url: imageUrl,
                            },
                        ]}
                    >
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
                <Form.Item label="Company Name" name="Name"  >
                    <Input className='sm:w-[50%] w-[60%]' />
                </Form.Item>
                <Form.Item label="Description" name="description">
                    <TextArea rows={4} />
                </Form.Item>
                <Form.Item label="Date">
                    <DatePicker onChange={handleDateChange} />
                </Form.Item>
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
                    <Input addonBefore={""} className='sm:w-[40%] w-[50%]' />
                </Form.Item>

                <Button type="" htmlType="submit">
                    Submit
                </Button>

            </Form>}
        </div>
    );
};
