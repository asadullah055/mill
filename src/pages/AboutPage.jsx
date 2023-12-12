import React from "react";
import Chairman from "../conponents/About/Chairman/Chairman";
import Overview from "../conponents/About/Overview/Overview";
import Staff from "../conponents/About/Staff/Staff";
import ATitle from "../conponents/About/Title/ATitle";
import WhyAre from "../conponents/About/WhyWeAre/WhyAre";

const AboutPage = () => {
  return (
    <div>
      <ATitle></ATitle>
      <Overview></Overview>
      <WhyAre></WhyAre>
      <Staff></Staff>
      <Chairman></Chairman>
    </div>
  );
};

export default AboutPage;
