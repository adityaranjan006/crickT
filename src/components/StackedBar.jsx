import React, { useContext } from 'react'
import {Bar, getElementsAtEvent} from 'react-chartjs-2'
import {useRef} from 'react'
import { MyContext } from './MyContext'
import { useNavigate } from 'react-router-dom';


import {
    Chart as ChartJs,
    CategoryScale,
    BarElement,
    LinearScale,  
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { color } from 'chart.js/helpers';

ChartJs.register({
    CategoryScale,
    BarElement,
    LinearScale,
    Title,
    Tooltip,
    Legend
});


const StackedBar = () => {
    const {currData}=useContext(MyContext);
    const newData={
        label: `${currData.name}`,
        data: currData.stats,
        backgroundColor: 'rgb(211,155,1)',
        stack: 'Stack 1',
    }
    
    // console.log(newData)
    
    //Canvas Background 
    const plugin = {
        id: 'customCanvasBackgroundColor',
        beforeDatasetsDraw: (chart, args, options) => {
          const {ctx,chartArea:{top,bottom,left,right,width,height}} = chart;
          ctx.save();
          ctx.fillStyle = options.color;
          ctx.fillRect(left, top, width, height);
        }
      };
    
    const option={
        indexAxis: 'x',
        responsive: true,
        scales: {
            x: {
                stacked: true
            },
            y: {
                stacked: true
            },
        },
        color:'#9fffff'
        
        
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
                stack: 'Stack 0',
            },
            {
                ...newData
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
            // const dataSetIndex=getElementsAtEvent(chartRef.current,event)[3].datasetIndex;
            const name=data.datasets[3].label;
            const stats=data.datasets[3].data;
            const category=data.labels;
            
            const player={
                name:name,
                statistics:stats,
                category:category
            }

            navigate("/stats", {state:player});
            
            // console.log(name,stats,category)
        }
    }

  return (
    <div className='flex w-full bg-black rounded-md p-2'>
        <Bar options={option} data={data} ref={chartRef} plugins={[plugin]} onClick={onClick}/>
        {/* <p>Stacked Bar Grpah</p> */}
    </div>
  )
}

export default StackedBar
