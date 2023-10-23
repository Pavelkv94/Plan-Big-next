import React, { useContext, useEffect, useState } from "react";
import Head from "next/head";
import { ThemeContext } from "../components/ThemeContext";
import HeaderNavMenu from "../components/HeaderNavMenu";
import Main from "../components/Main";
import VideoMaking from "../components/VideoMaking";
import Portfolio from "../components/Portfolio";
import Reasons from "../components/Reasons";
import Services from "../components/Services";
import Consultation from "../components/Consultation";
import WithUs from "../components/WithUs";
import Clients from "../components/Clients";
import WorkStages from "../components/WorkStages";
import Footer from "../components/Footer";
import Modal from "../components/Modal";


const Index = () => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);
  const [openModal, setOpenModal] = useState(false);
  const [tab, setTab] = useState(6);
  const [screenSize, setScreenSize] = useState(null);

  const onCloseModal = () => setOpenModal(false);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      
      <div className="app-wrapper">
        <HeaderNavMenu isDarkTheme={isDarkTheme} setOpenModal={setOpenModal}/>
        <Main isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} screenSize={screenSize}/>
        {/* <VideoMaking isDarkTheme={isDarkTheme} />
        <Portfolio isDarkTheme={isDarkTheme} tab={tab} setTab={setTab} />
        <Services isDarkTheme={isDarkTheme} />
        <Consultation isDarkTheme={isDarkTheme} />
        <Reasons isDarkTheme={isDarkTheme} />
        <WithUs isDarkTheme={isDarkTheme} />
        <Clients isDarkTheme={isDarkTheme} />
        <WorkStages isDarkTheme={isDarkTheme} />
        <Footer isDarkTheme={isDarkTheme} setTab={setTab}/> */}
        {openModal && <Modal onCloseModal={onCloseModal}/>}
      </div>
    </>
  );
};

export default Index;
