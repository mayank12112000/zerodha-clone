import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from './RightSection';

export default function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imgUrl="media/kite.png"
        productName="Kite"
        productDesc="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStrore=""
      />
      <RightSection
      imgUrl="media/coin.png"
      productName="Coin"
      productDesc='Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.'        tryDemo=""
      learnMore=""
      googlePlay=""
      appStrore=""
      />
      <LeftSection
        imgUrl="media/console.png"
        productName="Console"
        productDesc="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMore=""
      />
      
      <RightSection
      imgUrl="media/kiteconnect.png"
      productName="Kite Connect API"
      productDesc="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
      learnMore=""
      googlePlay=""
      appStrore=""
      />
      <LeftSection
        imgUrl="media/varsity.png"
        productName="Varsity mobile"
        productDesc="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        learnMore=""
        googlePlay=""
        appStrore=""
      />
    </>
  );
}
