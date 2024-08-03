import React from 'react'

export default function Hero() {
  return (
    <div className='container d-flex'>
      <div className="row text-center justify-content-center">
      <img className='hero mb-5' src='media/homeHero.png' alt='hero image' />
      <h1 className='mt-5'>Invest in everything</h1>
      <p>Online platform to invest in stocks, derivatives, mutual funds and more!</p>
      <button className='btn fs-5 btn-primary hero-btn mb-5'>SignUp Now</button>
      </div>
    </div>
  )
}