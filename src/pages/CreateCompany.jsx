import React from 'react'
import { CreateCompany } from "../components/companies/CreateCompany"
import { Card } from 'antd';
export const CreateCompanyPage = () => {
    return (
        <div>
            <Card bordered={false}>
                <CreateCompany />
                

            </Card>
        </div>
    )
}
