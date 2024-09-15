import React from 'react'
import CountUp from 'react-countup';
import {Bar} from 'react-chartjs-2'
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




const DashCard = (props) => {
    const option={
      indexAxis: 'x',
      responsive: true,
      scales: {
          x: {
              stacked: false
          },
          y: {
              stacked: false
          },
      },
      color:'#9fffff',
      autoPadding:true,
    }
    //Canvas Background 
    const plugin = {
      id: 'CanvasBackgroundColor',
      beforeDatasetsDraw: (chart, args, options) => {
        const {ctx,chartArea:{top,bottom,left,right,width,height}} = chart;
        ctx.save();
        ctx.fillStyle = options.color;
        ctx.fillRect(left, top, width, height);
      }
    };

    const TopPlayers=[
        {
            label: 'S.Tendulkar',
        },
        {
            label: 'Virat',
        },
        {
            label: 'MS Dhoni',
        },
    ]

    const data={
      labels: [`${props.name}`,`${TopPlayers[0].label}`, `${TopPlayers[1].label}`,`${TopPlayers[2].label}`],
      datasets: [
          {
            label: [`${props.name}`],
            data: [`${props.stat}`,`${props.top1}`, `${props.top2}`, `${props.top3}`],
            backgroundColor:[
              'rgb(255,99,132)',
              'rgb(54,162,235)',
              'rgb(255,205,86)',
              'rgb(75,192,192)',
            ],
          },
      ]
    }  
  return (
    <div className='relative flex flex-col rounded-lg transition duration-150 p-2 bg-black text-white justify-end lg:gap-5 md:gap-2 sm:gap-2 mt-2 rounded-tr-2xl group'>
      <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 blur opacity-75 rounded-lg rounded-tr-2xl group-hover:scale-105 transition duration-150" style={{ zIndex: -1 }}></div>
        <div className="relative flex justify-start">
            <h2 className='text-2xl font-extrabold'>{props.val}</h2>
        </div>
          <div className="relative BarSize">
          <Bar options={option} plugins={[plugin]} data={data}/>
        </div>
          <div className="relative flex justify-start">
            <h2 className='relative lg:text-4xl md:text-4xl sm:text-3xl font-mono-800 font-extrabold'>
            <CountUp start={0} end={props.stat} delay={1}/>
            </h2>     
        </div>
    </div>
  )
}

export default DashCard
