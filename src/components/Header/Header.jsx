import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { HeaderWrapper, LightModeIcon, DarkModeIcon } from "./Header.styled";
import Logo from "../../assets/svgs/tic-tac-toe.jpg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();
  return (
    <HeaderWrapper>
      <img
        src={Logo}
        alt="Logo"
        className="logo"
        onClick={() => navigate("/")}
      />
      ;
      <span onClick={() => toggleTheme()}>
        {theme === "light" ? <LightModeIcon /> : <DarkModeIcon />}
      </span>
    </HeaderWrapper>
  );
};

export default Header;
