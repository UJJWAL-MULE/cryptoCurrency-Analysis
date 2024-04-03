import React from 'react'
import { useState ,useEffect } from 'react';
import Loader from './Loader';
import ErrorComponent from './ErrorComponent';
import axios from 'axios';
import { server } from '..';
import CoinCard from './CoinCard';
import Footer from './Footer';

const Coins = () => {

  // const corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/';

  let [coins, setCoins] = useState([]);
  let [loader, setLoader] = useState(true);
  let [err,setError]=useState(false)
  let [page,setPage]=useState(1)
  let [currency,setCurrency]=useState('inr')

  let currencySymbol= currency==='inr'? '₹':currency==='eur'?'Є':"$";

// changing the state of page when user clicked greater than or less than  buttom
  const changePage=(nextPage)=>{ 
    if(nextPage>0){
      setPage(nextPage)
      setLoader(true)
    }    
    else{
      setPage(1)
    }                 
   
  }

  // use to fetch the data of coin  from coingecko.com  and setting state of coin as data and state of loder as false when coins are successfully fetched . 
  useEffect(() => {
    const fetchCoins = async () => {
   try {
    console.log("inside try")
    let { data } = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`);
    // let { data } = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en')
     console.log(data)
     setCoins(data);
     setLoader(false);   

   } catch (error) {
    setError(true)
    setLoader(false)
    console.log(error)
   }
    };
    fetchCoins();
  }, [currency,page]);

  // redirecting the page to ErrorComponet  when error occurs
  if(err){
    return <ErrorComponent messages="Error while fetching coins"/>
  }


  return (
    <>
    <div className="container p-4">
    { // using conditional rendering if loader is true then show loader component else show the below code
      loader ?<Loader />:
       <>

          <div className="col-md-12 text-center my-2">
          <select value={currency} onChange={(e)=>setCurrency(e.target.value)}>
            <option value="select">Select</option>
            <option value="inr">INR</option>
            <option value="eur">EUR</option>
            <option value="usd">USD</option>
          </select>
          </div>

          <div className="col-md-12">
          <div className="row">
            {coins.map((value) => {
             return (
               <>
                 <div className="col-lg-2 col-sm-4">
                   <CoinCard
                     key={value.id} 
                     id={value.id}
                     name={value.name}
                     symbol={value.symbol}
                     img={value.image}
                     price={value.current_price}
                     currencySymbol={currencySymbol}
                   />
                 </div>
               </>
             );
           })}
         </div>
         </div>

        {/* creating page button to change the pages */}
        <div className="col-md-12 text-center">
          <button className='btn btn-secondary text-light mx-2' onClick={()=>{changePage(page-1)}}> &lt; </button>
          <button className='btn btn-secondary text-light' onClick={()=>{changePage(page+1)}}> &gt; </button> 
        </div>

       </>

    }
    </div>
    <Footer/>
</>
  )
}

export default Coins
