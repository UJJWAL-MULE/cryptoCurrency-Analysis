import React, { useEffect } from "react";
import Loader from "./Loader";
import { NavLink } from "react-router-dom";
import "./Home.css";
import Footer from "./Footer";
import { useState } from "react";


const Home = () => {
  let [loader, setLoader] = useState(true);
  useEffect(()=>{
    setLoader(false)
  })

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <>
          <div class="container-fluid main">
            <div class="jumbotron">
              <div class="row">
                <div class="col-md-6 ">
                  <h1 class="display-4">Welcome to Crypto Analysis</h1>
                  <p class="lead">
                    Explore the dynamic world of cryptocurrencies with Crypto
                    Analysis, where detailed charts and up-to-date data provide
                    a deep understanding of market trends and coin performance
                  </p>
                  <hr class="my-4" />
                  <p className="text">Start exploring now!</p>
                  <div className="text">
                    <button
                      class="btn btn-primary btn-lg"
                      href="#"
                      role="button"
                    >
                      <NavLink to="/exchanges">Explore</NavLink>
                    </button>
                  </div>
                </div>
                <div class="col-md-6">
                  <img
                    src="./images/bitcoin.jpg"
                    style={{ borderRadius: "10px" }}
                    class="img-fluid"
                    alt="Crypto Analysis Image"
                  />
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </>
      )}
    </>
  );
};

export default Home;

{
  /* <NavLink to='/coins'>Explore</NavLink> */
}
