
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
//Adding OverAll Rating at Last of Index of the Data key of the Dataset Object
const playerData={
    labels: ["Bat Avg", "Stk Rate","Runs","50s","100s"],
    datasets: [
        {
            label: 'S.Tendulkar',
            data: [1080,736,2000,500,400,94],
            backgroundColor:'rgb(0,0,255)',
            stack: 'Stack 0'
        },
        {
            label: 'Virat',
            data: [980,806,1200,600,500,90],
            backgroundColor: 'rgb(255,0,0)',
            stack: 'Stack 0'
        },
        {
            label: 'MS Dhoni',
            data: [780,800,1000,400,300,91],
            backgroundColor: 'rgb(0,255,0)',
            stack: 'Stack 0'
        },
        {
            label: 'S Raina',
            data: [670,480,1400,200,350,89],
            backgroundColor: 'rgb(211,155,1)',
            stack: 'Stack 1'
        },
        {
            label: 'Yuvraj Singh',
            data: [1002,454,1566,310,450,90],
            backgroundColor: 'rgb(211,155,1)',
            stack: 'Stack 1'
        },{
            label: 'A Gilchrist',
            data: [876,675,1650,180,460,93],
            backgroundColor: 'rgb(211,155,1)',
            stack: 'Stack 1'
        },{
            label: 'R Ponting',
            data: [789,677,1380,120,220,85],
            backgroundColor: 'rgb(211,155,1)',
            stack: 'Stack 1'
        },{
            label: 'M Hyden',
            data: [628,536,1500,300,800,90],
            backgroundColor: 'rgb(211,155,1)',
            stack: 'Stack 1'
        },{
            label: 'B Lee',
            data: [267,366,1350,100,380,83],
            backgroundColor: 'rgb(211,155,1)',
            stack: 'Stack 1'
        },{
            label: 'S Gyungly',
            data: [798 ,664,1740,370,370,86],
            backgroundColor: 'rgb(211,155,1)',
            stack: 'Stack 1'
        },{
            label: 'G Gambhir',
            data: [686,366,1240,340,450,84],
            backgroundColor: 'rgb(211,155,1)',
            stack: 'Stack 1'
        },{
            label: 'R Sharma',
            data: [1000,629,1900,500,700,91],
            backgroundColor: 'rgb(211,155,1)',
            stack: 'Stack 1'
        },
        
    ]
} 

export default playerData;