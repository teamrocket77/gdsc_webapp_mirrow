import Head from "next/head";
import styles from "../styles/Home.module.css";

import React from "react";
import ReactDOM from "react-dom";
import MyApp from "./_app";
//import "./index.css"

//import "./fonts/GoogleSans-Bold-v1.27.ttf";
//import "./fonts/GoogleSansDisplay-Regular-v1.27.ttf";
//import "../styles/globals.css";


class Index {
  state = {};
  constructor(root) {
    this.root = root;
  }
  render () {
    return <MyApp/>;
  }

}

export default Index;


