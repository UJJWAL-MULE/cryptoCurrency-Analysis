import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS,CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend } from 'chart.js'

ChartJS.register(CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend)
const Chart = ({arr,currency ,days}) => {

  const price=[]
  const date=[]
  console.log(arr)
  for(let i=0;i<arr.length;i++){
     price.push(arr[i][1])
     date.push( new Date(arr[i][0]).toLocaleTimeString())
  
  }

  console.log(price)
 // console.log(date)

  return (
   <>
   <Line
   options={{responsive:true}}
   data={
    {
      labels:date,
      datasets:[{
        label:'price in '+ currency,
        data:price,
        borderColor:"rgba(255,95,32)",
        backgroundColor:"rgba(255,95,32,0.5)"
      }]
    }
   }
   />
   </>
  )
}

export default Chart
