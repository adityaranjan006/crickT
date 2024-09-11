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
    }

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
      labels: [`${TopPlayers[0].label}`, `${TopPlayers[1].label}`,`${TopPlayers[2].label}`,`${props.name}`],
      datasets: [
          {
            label: [`${props.name}`],
            data: [`${props.top1}`, `${props.top2}`, `${props.top3}`,`${props.stat}`],
            backgroundColor:[
              'rgb(0,0,255)',
              'rgb(0,255,0)',
              'rgb(255,0,0)',
              'rgb(199,21,127)',
            ],
          },
      ]
    }  
  return (
    <div className='flex flex-col rounded-lg transition duration-150 p-2 bg-gradient-to-r from-slate-200 via-blue-200 to-purple-400 justify-end hover:scale-105 lg:gap-5 md:gap-2 sm:gap-2 mt-2 rounded-tr-2xl'>
        <div className="flex- justify-start">
            <h2 className='text-2xl font-extrabold'>{props.val}</h2>
        </div>
        <div className="BarSize">
        <Bar options={option} data={data}/>
        </div>
        <div className="flex justify-start">
            <h2 className='lg:text-4xl md:text-4xl sm:text-3xl font-mono-800 font-extrabold'>
            <CountUp start={0} end={props.stat} delay={1}/>
            </h2>     
        </div>
    </div>
  )
}

export default DashCard
