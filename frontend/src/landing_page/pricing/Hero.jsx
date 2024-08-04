import React from "react";

export default function Hero() {
  return (
    <div className="container border-bottom mb-5">
      <div className="row text-center border-bottom ">
        <h1 className="fs-1 mt-5 ">Pricing</h1>
        <h3 className="text-center text-muted fs-4">
          Free equity investments and flat ₹20 intraday and F&O trades
        </h3>
      </div>
      <div className="row ">
        <div className="col-sm ">
          <img src="media/pricingEquity.svg" alt="" />
          <h1>Free equity delivery</h1>
          <p className="text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-sm">
          <img src="media/intradayTrades.svg" alt="" />
          <h1>Intraday and F&O trades</h1>
          <p className="text-muted">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-sm">
          <img src="media/pricingEquity.svg" alt="" />
          <h1>Free direct MF</h1>
          <p className="text-muted">
            Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
            F&O trades.
          </p>
        </div>
      </div>
    </div>
  );
}
