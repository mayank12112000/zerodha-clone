import React from "react";

export default function Stats() {
  return (
    <div className="container mt-5">
      <div className="row d-flex align-items-center">
        <div className="col-sm">
          <h1 className='fs-1'>Trust with confidence</h1>
          <div>
            <h2 className="fs-5">Customer-first always</h2>
            <p className="text-muted">
              That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh
              crores of equity investments and contribute to 15% of daily retail
              exchange volumes in India.
            </p>
            <h2 className="fs-5">No spam or gimmicks</h2>
            <p className="text-muted">
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you use at your pace, the way you like.
            </p>
            <h2 className="fs-5">The Zerodha universe</h2>
            <p className="text-muted">
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>
            <h2 className="fs-5">Do better with </h2>
            <p className="text-muted">
              With initiatives like Nudge and Kill Switch, we don't just
              facilitate transactions, but actively help you do better with your
              money.
            </p>
          </div>
        </div>
        <div className="col-sm">
          <img className="ecosystem" src="media/ecosystem.png" alt="" />
          <div className="row arrow">
            <div className="col-sm">
            <a href="">Explore our products <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            </div>
            <div className="col-sm">
            <a href="">Try Kite Demo <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
