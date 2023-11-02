import React, { useContext } from "react";
import { ThemeContext } from "../components/ThemeContext";
import AppContainer from "../components/AppContainer";

const Index = () => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="app-wrapper">
      <AppContainer isDarkTheme={true} toggleTheme={toggleTheme} />
    </div>
  );
};

export default Index;
