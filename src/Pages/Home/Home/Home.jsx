import React from "react";
import Banner from "../Banner/Banner";
import BannerNew from "../Banner/BannerNew";
import HomeServiceCards from "../ServiceCards/HomeServiceCards";

const Home = () => {
  return (
    <div>
      <BannerNew></BannerNew>
      <HomeServiceCards></HomeServiceCards>
    </div>
  );
};

export default Home;
