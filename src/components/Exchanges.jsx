import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../index";import Loader from "./Loader";
import ExchangeCard from "./ExchangeCard";
import ErrorComponent from "./ErrorComponent";
import Footer from "./Footer";

const Exchanges = () => {
  //const corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/';

  let [exchanges, setExchanges] = useState([]);
  let [loader, setLoader] = useState(true);
  let [error,setError]=useState(false)

  useEffect(() => {
    const fetchExchanges = async () => {
     try{
      let { data } = await axios.get(`${server}/exchanges`);
      console.log(data)
      setExchanges(data);
      setLoader(false);
    
     }
     catch(error){
      setError(true)
      setLoader(false)
     }
    };
    fetchExchanges();
  
  }, []);


  if(error){
    return <ErrorComponent messages="Error while fetching Exchanges data due to paid API(minimum Refresh rate) "/>
  }



  return (
    <>
    <div className="container p-4">
    {
      loader ?<Loader />:
       <>
       

   
       <div className="row">
         {exchanges.map((value) => {
          return (
            <>
              <div className="col-lg-2 col-sm-4 ">
          

                <ExchangeCard
                  key={value.id}
                  name={value.name}
                  url={value.url}
                  rank={value.trust_score_rank}
                  img={value.image}
                />
              </div>
            </>
                       
          );
        })}
      </div>
    

      </>

    }
    </div>
    <Footer/>
    </>
  )
  };



export default Exchanges;
