import React from 'react'
import { UpdateCompany } from '../components/companies/EditCompany'
import { Card } from 'antd';
export const EditCompanyPage = () => {
  return (
    <div className='p-3'>
      <Card>

        <UpdateCompany />
      </Card>
    </div>
  )
}
