
//When Data Needs to be Fetched from API

// const response= async()=>{
//     return (await fetch('https://rest.cricketapi.com/rest/v2/player/v_kohli/league/icc/stats/?access_token=ACCESSTOKEN',{
//         method:'GET',
//         headers: {
//             "Content-Type": "application/json",
//           },
//     }))
// }
// response().then((data)=>{
//     console.log(data.json())
// })


//Manual dataset as preferrred to CHartJs format DUMMY DATABSE
const playerData={
    labels: ["Bat Avg", "Stk Rate","Runs","50s","100s"],
    datasets: [
        {
            label: 'S.Tendulkar',
            data: [1080,736,2000,500,400],
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
            label: 'MS Dhoni',
            data: [780,800,1000,400,300],
            backgroundColor: 'rgb(0,255,0)',
            stack: 'Stack 0'
        },
        {
            label: 'S Raina',
            data: [998,736,1800,300,800],
            backgroundColor: 'rgb(211,155,1)',
            stack: 'Stack 1'
        },
        {
            label: 'Yuvraj Singh',
            data: [998,736,1800,300,800],
            backgroundColor: 'rgb(211,155,1)',
            stack: 'Stack 1'
        },{
            label: 'A Gilchrist',
            data: [998,736,1800,300,800],
            backgroundColor: 'rgb(211,155,1)',
            stack: 'Stack 1'
        },{
            label: 'R Ponting',
            data: [998,736,1800,300,800],
            backgroundColor: 'rgb(211,155,1)',
            stack: 'Stack 1'
        },{
            label: 'M Hyden',
            data: [998,736,1800,300,800],
            backgroundColor: 'rgb(211,155,1)',
            stack: 'Stack 1'
        },{
            label: 'B Lee',
            data: [998,736,1800,300,800],
            backgroundColor: 'rgb(211,155,1)',
            stack: 'Stack 1'
        },{
            label: 'S Gyungly',
            data: [998,736,1800,300,800],
            backgroundColor: 'rgb(211,155,1)',
            stack: 'Stack 1'
        },{
            label: 'G Gambhir',
            data: [998,736,1800,300,800],
            backgroundColor: 'rgb(211,155,1)',
            stack: 'Stack 1'
        },{
            label: 'R Sharma',
            data: [998,736,1800,300,800],
            backgroundColor: 'rgb(211,155,1)',
            stack: 'Stack 1'
        },
        
    ]
} 

export default playerData;