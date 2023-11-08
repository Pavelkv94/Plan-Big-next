import React from "react";
import Head from "next/head";
import Thanks from "../components/Thanks";

const Tnx = () => {
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
        <Thanks isDarkTheme={true} />
      </div>
    </>
  );
};

export default Tnx;
