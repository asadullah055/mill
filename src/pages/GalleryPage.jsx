import React from "react";
import GTitle from "../conponents/Gallery/Gtitle/GTitle";
import Inside from "../conponents/Gallery/Inside/Inside";
import MostSell from "../conponents/Gallery/MostSell/MostSell";
import OutSide from "../conponents/Gallery/Outside/OutSide";
import Parti from "../conponents/Gallery/Parti/Parti";

const GalleryPage = () => {
  return (
    <>
      <GTitle></GTitle>
      <MostSell />
      <OutSide />
      <Inside></Inside>
      <Parti></Parti>
    </>
  );
};

export default GalleryPage;
