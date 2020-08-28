import React from 'react'
import './OurShowcase.css'
import Items from './Items'

function OurShowcase() {
  return (
    <div className='container'>
      <h3>Our Showcase</h3>
      <div className="categories-Showcase">
        <a href="#">Man</a>
        <a href="#">Woman</a>
        <a href="#">Kids</a>
        <a href="#">Bags</a>
        <a href="#">Watches</a>
        <a href="#">Toys</a>
      </div>
      <div className="products">
        <Items/>
      </div>
      
    </div>
  )
}

export default OurShowcase