import React from 'react';
import './App.css';
import Menu from './components/Menu'
import OurShowcase from './components/OurShowcase'
import NewsLetter from './components/NewsLetter'


function App() {
  return (
    <div>
      <header>
        <div className="header">
          <h1>Big Shop</h1>
          <Menu/>
        </div>
        <h2>
          <span style={{color: "#000000"}}>Summer</span>
          <span style={{color: "#ffffff"}}> Collection</span>
        </h2>
        <p>
          <span style={{color: "#fbf934"}}>25% <span style={{color: "#ffffff"}}> OFF</span></span>
        </p>
      </header>
      <main>
        
        {/* <TrendyArrivals/>
        <OurBrands/>*/}
        <OurShowcase/>
        <NewsLetter/>
      </main>
      <footer>
        <p className="logo">Big Shop</p>
        <div className="categories">
          <a href="#">Man</a>
          <a href="#">Woman</a>
          <a href="#">Kids</a>
          <a href="#">Bags</a>
          <a href="#">Watches</a>
          <a href="#">Toys</a>
        </div>
        <div className="social">
          <a href="#" class="fa fa-facebook"></a>
          <a href="#" class="fa fa-google"></a>
          <a href="#" class="fa fa-instagram"></a>
          <a href="#" class="fa fa-twitter"></a>
        </div>
        <div className="copyright">
          <p> © Copyright 2017. Big Shop by Victor Themes </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
