import React from 'react';
import { Card } from 'antd';
import { Area,Line } from '@ant-design/plots';
import SsidChartIcon from '@mui/icons-material/SsidChart'
export const Graph = () => {
  const data = [
    { year: '1991', value: 3 },
    { year: '1992', value: 4 },
    { year: '1993', value: 3.5 },
    { year: '1994', value: 5 },
    { year: '1995', value: 4.9 },
    { year: '1996', value: 6 },
    { year: '1997', value: 7 },
    { year: '1998', value: 9 },
    { year: '1999', value: 13 },
  ];

  const config = {
    data,
    xField: "year",
    yField: "value",
  };

  return (
    <Card title={<div><SsidChartIcon/> Graph</div>} bordered={false} style={{ width: "100%",height:"550px" }}>
      <Line {...config} />
    </Card>
  );
};


