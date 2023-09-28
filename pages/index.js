import React, { useContext, useState } from "react";
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

  const onCloseModal = () => setOpenModal(false);

  return (
    <>
      
      <div className="app-wrapper">
        <HeaderNavMenu isDarkTheme={isDarkTheme} setOpenModal={setOpenModal}/>
        <Main isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
        <VideoMaking isDarkTheme={isDarkTheme} />
        <Portfolio isDarkTheme={isDarkTheme} />
        <Services isDarkTheme={isDarkTheme} />
        <Consultation isDarkTheme={isDarkTheme} />
        <Reasons isDarkTheme={isDarkTheme} />
        <WithUs isDarkTheme={isDarkTheme} />
        <Clients isDarkTheme={isDarkTheme} />
        <WorkStages isDarkTheme={isDarkTheme} />
        <Footer isDarkTheme={isDarkTheme} />
        {openModal && <Modal onCloseModal={onCloseModal}/>}
      </div>
    </>
  );
};

export default Index;
