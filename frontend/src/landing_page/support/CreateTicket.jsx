import React from "react";

export default function CreateTicket() {
  return (
    <div className="container my-5">
      <h1 className="fs-3">To create a ticket, select a relevant topic</h1>
      <div className="row my-5 ">
        <div className="col-sm">
          <h2 className="fs-5">Account Opening</h2>
          <ul className="blue">
            <li> Getting started</li>
            <li> Online</li>
            <li> Offline</li>
            <li> Charges</li>
            <li> Company, Partnership and HUF</li>
            <li> Non Resident Indian (NRI)</li>
          </ul>
        </div>
        <div className="col-sm">
          <h2 className="fs-5">Your Zerodha Account</h2>
          <ul  className="blue">
            <li>Login credentials</li>
            <li>Your Profile</li>
            <li>Account modification and segment addition</li>
            <li>CMR & DP ID</li>
            <li>Nomination</li>
            <li>Transfer and conversion of shares</li>
          </ul>
        </div>
        <div className="col-sm">
          <h2 className="fs-5">Trading & Markets</h2>
          <ul className="blue">
            <li>Trading FAQs</li>
            <li>Kite</li>
            <li>Margins</li>
            <li>Product and order types</li>
            <li>Corporate actions</li>
            <li>Kite features</li>
          </ul>
        </div>
        <div className="row">
          <div className="col-sm">
            <h2 className="fs-5">Funds</h2>
            <ul className="blue">
              <li>Fund withdrawal</li>
              <li>Adding funds</li>
              <li>Adding bank accounts</li>
              <li>eMandates</li>
            </ul>
          </div>
          <div className="col-sm">
            <h2 className="fs-5">Console</h2>
            <ul className="blue">
              <li>IPO</li>
              <li>Portfolio</li>
              <li>Funds statement</li>
              <li>Profile</li>
              <li>Reports</li>
              <li>Referral program</li>
            </ul>
          </div>
          <div className="col-sm">
            <h2 className="fs-5">Coin</h2>
            <ul className="blue">
              <li>Understanding mutual funds and Coin</li>
              <li>Coin app</li>
              <li>Coin web</li>
              <li>Transactions and reports</li>
              <li>National Pension Scheme (NPS)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
