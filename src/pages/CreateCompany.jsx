import React from 'react'
import { CreateCompany } from "../components/companies/CreateCompany"
import { Card } from 'antd';
export const CreateCompanyPage = () => {
    return (
        <div className='p-4'>
            <Card bordered={false}>
                <CreateCompany />
                

            </Card>
        </div>
    )
}
