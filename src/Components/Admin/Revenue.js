import React from 'react';
import './Stocks.css'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
const data = [
    { name: 'Most Selling', uv: 1000, pv: 2000, amt: 3000 },
    { name: 'Low Selling', uv: 500, pv: 1000, amt: 1500 },
  ];
const Revenue = () => {
  return (
    <BarChart className='chart'
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5, right: 30, left: 20, bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="uv" fill="#8884d8" />
      <Bar dataKey="pv" fill="#82ca9d" />
    </BarChart>
  );
}

export default Revenue;