import React from "react";

export default function Awards() {
  return (
    <div className="container">
      <div className="row d-flex align-items-center">
        <div className="col-sm ">
          <img className="largest-broker" src="media/largestBroker.svg" alt="largest broker" />
        </div>
        <div className="col-sm p-5">
          <h1>Largest stock broker in India</h1>
          <p>
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily bu trading and investing in:{" "}
          </p>
          <ul>
            <div className="row ">
              <div className="col-6 p-2">
                <li>
                  <p>Futures and options</p>
                </li>
                <li>
                  <p>Commodity & derivatives</p>
                </li>
                <li>
                  <p>Currency derivatives</p>
                </li>
              </div>
              <div className="col-6 p-2">
                <li>
                  <p>Stocks & IPOs</p>
                </li>
                <li>
                  <p>Direct mutual funds</p>
                </li>
                <li>
                  <p>Gold and Govt. securites</p>
                </li>
              </div>
            </div>
          </ul>
      <img className="pressLogo" src="media/pressLogos.png" alt="" />
        </div>
      </div>
    </div>
  );
}
