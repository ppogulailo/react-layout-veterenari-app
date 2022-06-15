import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Grapq=()=>{
    const data = [
        {
            name: 'Jan',
            sell: 1200,
            amt: 2400,
        },
        {
            name: 'Feb',
            sell: 1698,
            amt: 2210,
        },
        {
            name: 'Mar',
            sell: 2000,
            amt: 2290,
        },
        {
            name: 'Apr',
            sell: 2200,
            amt: 2000,
        },
        {
            name: 'May',
            sell: 2400,
            amt: 2181,
        },
        {
            name: 'Jun',
            sell: 2600,
            amt: 2500,
        },
        {
            name: 'Jul',
            sell: 3000,
            amt: 2100,
        },
        {
            name: 'Ags',
            sell: 3200,
            amt: 2100,
        },
        {
            name: 'Sep',
            sell: 3050,
            amt: 2100,
        },
        {
            name: 'Oct',
            sell: 4300,
            amt: 2100,
        },
        {
            name: 'Num',
            sell: 4550,
            amt: 2100,
        },
        {
            name: 'Des',
            sell: 5200,
            amt: 2100,
        },
    ];
    return (
            <ResponsiveContainer width="90%" aspect={3} >
                <LineChart
                    width={200}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >

                    <XAxis dataKey="name"  />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="sell" stroke="#8884d8" activeDot={{ r: 8 }} />

                </LineChart>
            </ResponsiveContainer>
        );

}
export default Grapq;