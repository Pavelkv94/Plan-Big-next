import React, { useContext } from "react";
import Head from "next/head";
import { ThemeContext } from "../components/ThemeContext";
import AppContainer from "../components/AppContainer";

const White = () => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <Head>
        <meta keywords="pavel"></meta>
        <title>Plan Big</title>
        <link rel="icon" ref="../assets/logo.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&family=Tektur:wght@400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
      </Head>
      <div className="app-wrapper">
        <AppContainer isDarkTheme={false} toggleTheme={toggleTheme} />
      </div>
    </>
  );
};

export default White;
