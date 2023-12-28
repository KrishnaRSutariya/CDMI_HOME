import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Header from "./Header";
import Footer from "./Footer";
import OurDemand from "./OurDemand";
import OurPartener from "./OurPartener";
import ChooseCreative from "./ChooseCreative";
import HappyStudent from "./HappyStudent";
import Scroller from "./Scroller";
import CreativeVideo from "./CreativeVideo";
import OurCourse from "./OurCourse";
import Loader from "./Loader";

const CDMI = () => {
  return (
    <>
      <Loader />
      <Header />
      <OurCourse />
      <CreativeVideo />
      <Scroller />
      <HappyStudent />
      <ChooseCreative />
      <OurPartener />
      <OurDemand />
      <Footer />
    </>
  );
};

export default CDMI;
