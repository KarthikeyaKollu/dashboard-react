import React from 'react'
import { Card, Col, Row } from 'antd';
import { Graph } from "./Graph"
import { UpcommingEvents } from "./UpcommingEvents"

export const Graph_Up = () => {
  return (
    <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]} justify={"center"}>
      <Col xs={24} sm={16} >
        <div><UpcommingEvents /></div>
      </Col>
      <Col xs={24} sm={8} >
        <div><Graph /></div>
      </Col>

    </Row>
  )
}


