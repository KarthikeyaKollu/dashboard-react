import React from 'react'
import { Card } from 'antd';
import {ListPage} from "../components/companies/List"
export const Companies = () => {
    return (
        <div className='p-3'>
            <Card bordered={false}>
                <ListPage />
            </Card>
        </div>
    )
}
