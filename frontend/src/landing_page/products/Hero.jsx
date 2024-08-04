import React from 'react'
import {Link} from "react-router-dom"
export default function Hero() {
  return (
    <div className='container mt-5 border-bottom'>
      <div className="row text-center">
        <h1>Technology</h1>
        <h2 className='fs-5'>Sleek, mordern, and intuitive trading platforms</h2>
        <p>Check out out <Link className='links'>investment offerings →</Link>
        </p>
      </div>
    </div>
  )
}
