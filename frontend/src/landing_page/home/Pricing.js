import React from "react";

function Pricing() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-sm">
          <h1 className="fs-4">Unbeatable pricing</h1>
          <p>
          We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.
          </p>
        </div>

        <div className="col-sm">
          <div className="row ">
            <div className="col-sm">
              <h1 className="rupees">₹0</h1>
              <p className="text-muted">Free equity delivery and direct mutual funds</p>
            </div>
            <div className="col-sm">
              <h1 className="rupees">₹0</h1>
              <p className="text-muted">Free account opening</p>
            </div>
            <div className="col-sm">
              <h1 className="rupees">₹20</h1>
              <p className="text-muted">Intraday & F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
