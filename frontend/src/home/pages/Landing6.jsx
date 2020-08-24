import React, { useEffect } from "react";
import { scrollTo } from "utils";
import Footer2 from "../sections/Footer2";
import Intro6 from "../sections/Intro6";
import TopBar6 from "../sections/TopBar6";
import Subscription1 from "../sections/Subscription1";
import Intro4 from "../sections/Intro4";
import Services5 from "../sections/Services5";
import Services7 from "../sections/Services7";
import Services8 from "../sections/Services8";
import Treatment from "../sections/Treatment";

const Landing6 = () => {
  useEffect(() => {
    scrollTo("root");
  });

  return (
    <div className="landing">
      <TopBar6 />
      <Intro6 />
      <Intro4 />
      <Services5 />
      <Services7 />
      <Services8 />
      <Treatment />
      <Subscription1 />
      <Footer2 />
    </div>
  );
};

export default Landing6;
