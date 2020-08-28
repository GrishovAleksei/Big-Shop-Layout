import React from 'react'
import './NewsLetter.css'


function NewsLetter() {
  return (
    <div className="area">
      <p>GET NOTIFIED</p>
      <h3>Newsletter</h3>
      <div class="input-group">
      
        <input type="text" class="form-control" placeholder="Enter your email address.." aria-label="Enter your email address.." aria-describedby="button-notification"/>
      
        <button class="btn btn-gradient" type="button" id="button-notification">
          Submit
        </button>
        
      </div>
    </div>
  )
}

export default NewsLetter
