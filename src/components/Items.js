import React from 'react'
import watch from '../img/watch.png'

const data = [
  {
    image: watch,
    name: 'Fashion Chain Watch',
    price: '$ 35.24',
  },
  {
    image: watch,
    name: 'Fashion Chain Watch',
    price: '$ 32',
  },
  {
    image: watch,
    name: 'Fashion Chain Watch',
    price: '$ 30',
  },
  {
    image: watch,
    name: 'Fashion Chain Watch',
    price: '$ 30',
  },
  {
    image: watch,
    name: 'Fashion Chain Watch',
    price: '$ 30',
  },
  {
    image: watch,
    name: 'Fashion Chain Watch',
    price: '$ 30',
  }
]

const Items = () => 
  data.map((item, index) => (
    <div className="product" style={{"--angle": 45*index + 'deg'}}>
      <img src={item.image}/>
      <h4>{item.name}</h4>
      <p className="price">{item.price}</p>
      <button className="btn-gradient" id='add'>Add To Card</button>
    </div>
  )) 


export default Items
