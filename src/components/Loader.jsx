import React from "react";
import "./Loader.css"

const Loader = () => {
  return (
    <>
{/* 
<div class="center">
  <div class="wave"></div>
  <div class="wave"></div>
  <div class="wave"></div>
  <div class="wave"></div>
  <div class="wave"></div>
  <div class="wave"></div>
  <div class="wave"></div>
  <div class="wave"></div>
  <div class="wave"></div>
  <div class="wave"></div>
</div> */}

<div className="center">
<div class="loading-container ">
    <div class="loading"></div>
    <div id="loading-text">loading</div>
</div>
</div>
    </>
  );
};

export default Loader;
