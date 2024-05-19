import React, { Component } from "react";
import Header from "./component/Header";
import Main from "./component/Main";
import Footer from "./component/Footer";

function APP()
{
  return(
    <div>
      <Header />
      <Main myName="김성연"/>
      <Footer />
    </div>
  )
}
export default APP;