import Clients from "./Clients";
import Consultation from "./Consultation";
import Footer from "./Footer";
import HeaderNavMenu from "./HeaderNavMenu";
import Main from "./Main";
import Portfolio from "./Portfolio";
import Reasons from "./Reasons";
import Services from "./Services";
import VideoMaking from "./VideoMaking";
import WithUs from "./WithUs";
import WorkStages from "./WorkStages";

const AppContainer = ({ isDarkTheme, toggleTheme }) => {
  return (
    <>
      <HeaderNavMenu isDarkTheme={isDarkTheme} />
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
    </>
  );
};

export default AppContainer;
