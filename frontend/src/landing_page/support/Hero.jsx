import React from 'react';

export default function Hero() {
  return (
    <div className='bg-blue px-5'>
      <div className="row">
        <div className="col-sm px-5">
          <h1 className='fs-4 my-3'>Support Portal</h1>
          <h2 className='fs-5 mb-4'>Search for an answer or browse help topics to create a ticket</h2>
          <div className="input-container mb-4">
            <input className="support-input" type="text" placeholder="Eg: how do I activate F&O, why is my order getting rejected ..."/>
            <i className="fa fa-search search-icon" aria-hidden="true"></i>
          </div>
          <div className="row fs-7">
            <div className="col-sm-6">
              <a href="">Track account opening</a>
            </div>
            <div className="col-sm-6">
              <a href="">Track segment activation</a>
            </div>
            <div className="col-sm">
              <a href="">Intraday margin</a>
            </div>
            <div className="col-sm">
              <a href="">Kite user manual</a>
            </div>
          </div>
        </div>
        <div className="col-sm my-5 px-5">
          <h2 className='fs-6'>Track Tickets</h2>
          <h3>Featured</h3>
          <div className="row">
            <div className="col-sm mb-4">
              <a href="">1. Surveillance measure on scrips - August 2024</a>
            </div> 
            <div className="col-sm">
              <a href="">2. Latest Intraday leverages and Square-off timings</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
