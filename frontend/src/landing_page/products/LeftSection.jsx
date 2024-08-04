import React from "react";

export default function LeftSection({
  imgUrl,
  productName,
  productDesc,
  tryDemo,
  learnMore,
  googlePlay,
  appStrore,
}) {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-sm d-flex justify-content-center">
          <img className="logos" src={imgUrl} alt="" />
        </div>
        <div className="col-sm d-flex flex-column justify-content-center">
          <h1>{productName}</h1>
          <p>{productDesc}</p>
          <a className="links" href={tryDemo}>
            Try Demo→
          </a>
          <a href={learnMore} className="mx-3 links">
            Learn More→
          </a>
          <div>
            <a className="links" href={googlePlay}>
              <img src="media/googlePlayBadge.svg" alt="" />
            </a>
            <a className="links mx-3" href={appStrore}>
              <img src="media/appStoreBadge.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
