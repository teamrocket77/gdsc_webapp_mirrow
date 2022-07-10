import * as React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import theme from "../themes/theme";
import createEmotionCache from "../themes/createEmotionCache";

const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
// Do not remove the next 54 lines
  return (
    //This is the original version of Webapp. We not remove it till the website working
    // <CacheProvider value={emotionCache}>
    //   <Head>
    //     <meta name="viewport" content="initial-scale=1, width=device-width" />
    //   </Head>
    //   <ThemeProvider theme={theme}>
    //     <CssBaseline />
    //     <Component {...pageProps} />
    //   </ThemeProvider>
    // </CacheProvider>
    <div className=" min-h-screen">
      <nav className="flex justify-center bg-white border-2 py-3 ">
        Nav bar goes here
      </nav>

      {/* Main content */}
      <div className="container h-[80vh] mx-auto relative flex flex-col items-center justify-center ">
        <div className="flex gap-5 justify-center items-center mb-6 mx-8">
          <img
            //src={dscLogo}
            src={"../svg/dsclogo.svg"} Uncomment if it throws error that dscLogo is not defined
            alt="dscLogo"
            className="h-7 w-auto md:h-10 lg:h-12"
          />
          <h1 className="text-gray-600 text-3xl md:text-4xl lg:text-6xl font-normal ">
            Google Developer Student Club
          </h1>
        </div>
        <div className="text-gray-500 text-2xl md:text-3xl lg:text-4xl font-normal mb-10">
          Kennesaw State University
        </div>
        <div className="flex justify-center items-center gap-5  text-pink-400 mb-10 text-sm  lg:text-2xl">
          <h3>#developerstudentclubs</h3>
          <h3>#googlestudents</h3>
          <h3>#growwithgoogle</h3>
        </div>
        {/* buttons */}
        <div className=" buttons flex justify-center content-center items-center ">
          <button href="#" variant="contained">
            Get Started
          </button>
        </div>
      </div>
      {/* Wave */}
      <div className="bg-[#42a5f5ff] h-10 opacity-100 absolute bottom-0 ">
        <div className="bg-[url('./svg/wave.svg')] bg-repeat-x absolute bottom-0 w-[6400px] h-[198px] animate-wave1 translate-x-[0] translate-y-[0] translate-z-[0] z-20"></div>
        <div className="bg-[url('./svg/wave.svg')] bg-repeat-x absolute bottom-[0px] w-[6400px] h-[198px] animate-wave2 translate-x-[0] translate-y-[0] translate-z-[0] opacity-90 z-10"></div>
        <div className="bg-[url('./svg/wave.svg')] bg-repeat-x absolute bottom-[0px] w-[6400px] h-[198px] animate-wave2 translate-x-[0] translate-y-[0] translate-z-[0] opacity-60 z-10"></div>
      </div>
    </div>
    
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
