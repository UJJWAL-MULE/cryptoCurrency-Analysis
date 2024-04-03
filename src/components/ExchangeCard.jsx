
import React from 'react'
import "./Main.css";

const ExchangeCard = ({name,img,rank,url}) => {

  return (
   <>

   <a href={url} target='blank'>
     <div className="row ">
      <div className='col-md-12'>
        <div className="card my-3 "  >
          <img src={img} className=" m-auto  pt-2" height="60%" width="50%"  alt="..."/>
          <div class="card-body text-center">
            <h5 class="card-title">{rank}</h5>
            <p class="card-text fw-bold overflow-auto">{name.split(" ")[0]}</p>
          </div>  
        </div>
      </div>
     </div>
   </a>
   </>
  )
}

export default ExchangeCard
