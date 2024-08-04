import React from 'react'

export default function RightSection({imgUrl, productName, productDesc, tryDemo, learnMore,googlePlay, appStrore}) {
  return (
    
    <div className="container my-5">
      <div className="row">
        <div className="col-sm d-flex flex-column justify-content-center">
          <h1>{productName}</h1>
          <p >{productDesc}</p>
          
          <a href={learnMore} className="mx-3 links">
            Learn More→
          </a>
          
        </div>
        <div className="col-sm d-flex justify-content-center">
          <img className="logos" src={imgUrl} alt="" />
        </div>
      </div>
    </div>
  )
}
