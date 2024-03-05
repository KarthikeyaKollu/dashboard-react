import React from 'react'
import { Card } from 'antd';
import {ListPage} from "../components/companies/List"
export const Companies = () => {
    return (
        <div className='p-3'>
            <Card title={<div>List of Companies</div>} bordered={false} style={{ width: "100%" }}>
                <ListPage />
            </Card>
        </div>
    )
}
