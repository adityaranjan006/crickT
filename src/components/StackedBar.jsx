import React from 'react'
import {Bar, getElementsAtEvent} from 'react-chartjs-2'
import {useRef} from 'react'

import {
    Chart as ChartJs,
    CategoryScale,
    BarElement,
    LinearScale,  
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { useNavigate } from 'react-router-dom';

ChartJs.register({
    CategoryScale,
    BarElement,
    LinearScale,
    Title,
    Tooltip,
    Legend
});

const StackedBar = () => {
    const option={
        indexAxis: 'y',
        responsive: true,
        scales: {
            x: {
                stacked: true
            },
            y: {
                stacked: true
            }
        },
        
        
    }
    const data={
        labels: ["Bat Avg", "Stk Rate","Runs","50s","100s"],
        datasets: [
            {
                label: 'MS Dhoni',
                data: [780,800,1000,400,300],
                backgroundColor:'rgb(0,0,255)',
                stack: 'Stack 0'
            },
            {
                label: 'Virat',
                data: [980,806,1200,600,500],
                backgroundColor: 'rgb(255,0,0)',
                stack: 'Stack 0'
            },
            {
                label: 'S.Tendulkar',
                data: [1080,736,2000,500,400],
                backgroundColor: 'rgb(0,255,0)',
                stack: 'Stack 0'
            },
            {
                label: 'Abhinav',
                data: [998,736,1800,300,800],
                backgroundColor: 'rgb(211,155,1)',
                stack: 'Stack 1',
            },
            
        ]
    }  

    const navigate=useNavigate();

    const chartRef=useRef();
    const onClick=(event)=>{
        if(getElementsAtEvent(chartRef.current,event).length>0){
            // console.log(getElementsAtEvent(chartRef.current,event));
            // const dataPoint=getElementsAtEvent(chartRef.current,event)[0].index;
            // console.log(` DataPoint: ${dataSetIndex}`);
            const dataSetIndex=getElementsAtEvent(chartRef.current,event)[3].datasetIndex;
            const name=data.datasets[3].label;
            const stats=data.datasets[3].data;
            const category=data.labels;
            
            const player={
                name:name,
                statistics:stats,
                category:category
            }

            navigate("/stats", {state:player});
            
            console.log(name,stats,category)
        }
    }

  return (
    <div className='flex w-full bg-slate-200 rounded-md p-2'>
        <Bar options={option} data={data} ref={chartRef} onClick={onClick}/>
        {/* <p>Stacked Bar Grpah</p> */}
    </div>
  )
}

export default StackedBar
