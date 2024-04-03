import React from 'react'
import { NavLink } from 'react-router-dom'


const CoinCard = ({id,price,img,symbol,name,currencySymbol="₹"}) => {
  return (
   <>
   <NavLink to={`/coins/${id}`}>
     <div className="row ">
      <div className='col-lg-12'>
        <div className="card my-3 "  >
          <img src={img} className=" m-auto  pt-2" height="60%" width="50%" alt="..."/>
          <div className="card-body text-center">
            <p className="card-title">{symbol}</p>
            <div className='overflow-hidden '>
            <p className="card-text fw-bold fw-2">{name.split(" ")[0]}</p>
            </div>
            <p className="card-text  ">{price?`${currencySymbol}${price}`:'NA'}</p>
          </div>  
        </div>
      </div>
     </div>
   </NavLink>

   </>
  )
}

export default CoinCard
