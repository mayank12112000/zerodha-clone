import React from "react";

export default function Education() {
  return (
    <div className="container mt-5">
      <div className="row d-flex align-items-center">

      <div className="col-sm">
        <img className="ecosystem mb-5" src="media/education.svg" alt="" />
      </div>
      <div className="col-sm arrow">
        <h1 className="mb-3">Free and open market education</h1>
        <p>
          Varsity, the largest online stock market education book in the world
          covering everything from the basics to advanced trading.
        </p>
        <a href="">
          Versity <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
        </a>
        <p>
          TradingQ&A, the most active trading and investment community in India
          for all your market related queries.
        </p>
        <a href="">
          Trading Q&A <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
        </a>
      </div>
      </div>
    </div>
  );
}
