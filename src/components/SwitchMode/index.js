import React from "react";

import { Container, Background, Mask } from "./styles";

export default function (props) {
  const { darkMode, setDarkMode } = props;

  const handleChange = (e) => {
    const value = (e.target.name = "checkbox"
      ? e.target.checked
      : e.target.value);
    setDarkMode(value);
  };

  return (
    <>
      <Container className="switch-mode">
        <input
          type="checkbox"
          name="checkbox"
          checked={darkMode}
          onChange={handleChange}
        />

        <Background className="background" />

        <Mask className="mask" />
      </Container>
    </>
  );
}
