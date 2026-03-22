import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';
 const studentData = [
  { id: 1, name: "রাহাত", marks: 85 },
  { id: 2, name: "সাদিয়া", marks: 92 },
  { id: 3, name: "আরিফ", marks: 78 },
  { id: 4, name: "তানজিম", marks: 88 },
  { id: 5, name: "মালিহা", marks: 95 },
  { id: 6, name: "ফাহিম", marks: 65 },
  { id: 7, name: "ইশরাত", marks: 82 },
  { id: 8, name: "জুবায়ের", marks: 74 },
  { id: 9, name: "নাবিল", marks: 90 },
  { id: 10, name: "রাইসা", marks: 81 }
];

const ResultChart = () => {
   
    return (
      
            <LineChart width={500} height={500} data={studentData}>
             
      
            <Line dataKey="marks"></Line>
            <Line dataKey={'id'} stroke='greenYellow'></Line>
            </LineChart>
      
    );
};

export default ResultChart;


 