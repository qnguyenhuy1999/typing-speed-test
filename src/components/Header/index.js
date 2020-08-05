import React from "react";

import { HeaderStyle, Logo } from "./styles";
import SwitchMode from "../SwitchMode";
import logo from "../../logo.png";

export default function (props) {
  const { darkMode, setDarkMode } = props;

  return (
    <HeaderStyle>
      <Logo>
        <img src={logo} alt="Logo" />
      </Logo>
      <div className="main-menu">
        <SwitchMode darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </HeaderStyle>
  );
}
