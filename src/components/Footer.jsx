import React from 'react';
import "./Footer.css"

const Footer = () => {
  return (
   <>
    <footer className="bg-secondary">
    <div class="container ">
      <div class="row">
        <div class="col-md-4 footer-column">
          <h4>About Crypto</h4>
          <p>Explore the dynamic world of cryptocurrencies with Crypto Analysis, where detailed charts and up-to-date data provide a deep understanding of market trends and coin performance</p>
        </div>
        <div class="col-md-4 footer-column">
          <h4>Contact Us</h4>
          <p>Email: cryptdata@gmail.com</p>
          <p>Phone: +91-7895642341</p>
          <p>Address: 123 Main Street, City, Country</p>
        </div>
        <div class="col-md-4 footer-column d-flex justify-content-center ">
          <img src="https://via.placeholder.com/150" class="rounded-image" alt="Crypto Logo"/>
        </div>
      </div>
    </div>
  </footer>
   
   </>
  )
}

export default Footer
