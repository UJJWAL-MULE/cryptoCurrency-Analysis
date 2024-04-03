import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
import Loader from './Loader';
import { server } from '..';
import {  useParams } from 'react-router-dom';
import ErrorComponent from './ErrorComponent';
import Chart from './Chart';


const CoinsDetails = () => {
 // const corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/';

  let [coin, setCoin] = useState([]);
  let [loader, setLoader] = useState(true);
  let [err,setError]=useState(false)
  let [currency,setCurrency]=useState('inr')
  let [days,setDays]=useState('24h')
  let [chartArr,setChartArr]=useState([])

  let currencySymbol= currency==='inr'? '₹':currency==='eur'?'Є':"$";

  let params = useParams()
  // console.log(id)

  let btns=["24h","7d",'14d','30d','60d',"100d",'150d','365d']

  const setDayData=(val)=>{
    setDays(val)
    setLoader(true)
  }
  
  useEffect( ()=>{
    const fetchCoin=async ()=>{
      try{
        let {data}= await axios.get(`${server}/coins/${params.id}`)
       // console.log(data)
        let {data:chartData}= await axios.get(`${server}/coins/${params.id}/market_chart?vs_currency=${currency}&days=${days}`)
      //  console.log(chartData.prices)

        setChartArr(chartData.prices)
       // console.log(chartData)

        setCoin(data)
        setLoader(false)
      }
      catch(error){
        console.log(error)
        setLoader(false)
        setError(true)
      }
    }
    fetchCoin()
    },[params.id,currency,days])

    if(err){
      console.log(`Error during fetching ${params.id} data`)
      return <ErrorComponent messages={`Error during fetching ${params.id} data`} />
    }

  return (
    <>
    <div className="container">
      {loader?<Loader/>:
       (<>       
        < div className="col-md-12 ">
          <div className="col-md-12 text-end">
              {
                btns.map((val,i)=>{
                  return(
                    <>
                    <button key={i} className="btn btn-secondary my-1 mx-2" onClick={()=>{setDayData(val)}} >{val}</button>
                    </>
                  )
                })
              }
        </div>
          <div className="card">
            <div className="col-md-12 ">
            <Chart currency={currencySymbol} arr={chartArr} days={days}/>
            </div>
            
          </div>
        </div>
        <div className='my-3'>
           <div className='d-flex justify-content-center my-3'>
           <select value={currency}  onChange={(e)=>setCurrency(e.target.value)}>
                <option value="select">Select</option>
                <option value="inr">INR</option>
                <option value="eur">EUR</option>
                <option value="usd">USD</option>
            </select>
           </div>

           <p className="fs-6 opacity-50 text-center">Last updated date {" "} {coin.market_data.ath_date[currency].split("T")[0]+" Time "+ coin.market_data.ath_date[currency].split("T")[1]}</p>

        <div className="col-md-12">
          <img src={coin.image.large} className='mx-3'  height="5%" width="5%" alt="img" />
          <p className='mx-3 ' style={{marginBottom:0,marginTop:"1rem"}}>{coin.name}</p>
          <p className='mx-3' style={{marginBottom:0}}>{currencySymbol}{coin.market_data.ath[currency]}</p>  
          <p className={coin.market_data.price_change_percentage_24h_in_currency[currency]>0?" mx-3 text-success":" mx-3 text-danger"}><span className=""></span>{coin.market_data.price_change_percentage_24h_in_currency[currency]}</p>
          <div class="progress mx-3 my-1">
              <div class="progress-bar bg-success" role="progressbar" style={{width:"25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <div className="d-flex justify-content-between mx-3">
            <p className='text-danger' style={{fontSize:"0.9rem"}} >{currencySymbol}{coin.market_data.low_24h[currency]}</p>
            <p>24 Hours Range</p>
            <p className='text-success ' style={{fontSize:"0.9rem"}}>{currencySymbol}{coin.market_data.high_24h[currency]}</p>
          </div>
          <Item title={"Maxium Supply"} value={coin.market_data.max_supply}/>
          <Item title={"Circulating Supply"} value={coin.market_data.circulating_supply}/>
          <Item title={"Market Cap"} value={currencySymbol+coin.market_data.market_cap[currency]}/>
          <Item title={"All Time Low"} value={currencySymbol+coin.market_data.atl[currency]}/>
          <Item title={"All Time High"} value={currencySymbol+coin.market_data.ath[currency]}/>
        
         </div>
       
      
        </div>
        


      
       </>)

      
      

      }
    </div>
    </>
  )
}


const Item=({title,value})=>{
  return(
    <>
    <div className="d-flex justify-content-between px-3">
      <h6>{title}</h6>
      <p>{value}</p>
    </div>
    </>
  )
}

export default CoinsDetails
