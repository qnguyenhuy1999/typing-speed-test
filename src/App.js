import React, { useState, useEffect, useRef } from "react";
import classNames from "classnames";
import { paragraph } from "txtgen";
import "./App.css";

import Header from "./components/Header";
import Main from "./components/Main";
import Modal from "./components/Modal";

let interval = null;

function App() {
  const inputRef = useRef(null);
  const [darkMode, setDarkMode] = useState(false);
  const [countDown, setCountDown] = useState(3);
  const [paragraphs, setParagraph] = useState("");
  const [accuracy, setAccuracy] = useState(0);
  const [cpm, setCpm] = useState(0);
  const [wpm, setWpm] = useState(0);
  const [yourString, setYourString] = useState("");
  const [errorString, setErrorString] = useState("");
  const [correctString, setCorrectString] = useState("");
  const [isStart, setIsStart] = useState(false);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    setParagraph(`${paragraph()} ${paragraph()} ${paragraph()}`);
  }, []);

  const startGame = () => {
    setIsStart(true);
    inputRef.current.focus();

    const now = Date.now();
    const seconds = now + countDown * 1000;
    interval = setInterval(() => {
      const secondLeft = Math.round((seconds - Date.now()) / 1000);
      setCountDown(secondLeft);
      if (secondLeft === -1) {
        endGame();
      }
    }, 1000);
  };

  const endGame = () => {
    setModal(true);
    setIsStart(false);
    clearInterval(interval);
    setCountDown(60);
    setParagraph(`${paragraph()} ${paragraph()} ${paragraph()}`);
    setYourString("");
    inputRef.current.value = "";
  };

  const handleChangeInput = (e) => {
    if (isStart) {
      if (e.key === " ") {
        let text = inputRef.current.value.trim();
        let firstWord = paragraphs.split(" ")[0];

        if (text === firstWord) {
          setYourString(
            yourString + `<span style="color: green">${text} </span>`
          );
          setCorrectString(correctString + text);
        } else {
          setYourString(
            yourString + `<span style="color: red">${text} </span>`
          );
          setErrorString(errorString + text);
        }

        setParagraph(paragraphs.split(" ").slice(1).join(" "));
        inputRef.current.value = "";

        const timeRemains = ((60 - countDown) / 60).toFixed(2);
        const _accuracy = Math.floor(
          ((yourString.length - errorString.length) / yourString.length) * 100
        );
        const _wpm = Math.round(correctString.length / 5 / timeRemains);
        setAccuracy(_accuracy);
        setCpm(correctString.length);
        setWpm(_wpm);
      }
    }
  };

  const onClose = () => {
    setModal(false);
    setWpm(0);
    setCpm(0);
    setAccuracy(0);
  };

  return (
    <>
      <div
        className={classNames("App", {
          "dark-mode": darkMode,
          "modal-show": modal,
        })}
        onClick={onClose}
      >
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <Main
          countDown={countDown}
          paragraphs={paragraphs}
          yourString={yourString}
          isStart={isStart}
          accuracy={accuracy}
          cpm={cpm}
          wpm={wpm}
          inputRef={inputRef}
          startGame={startGame}
          endGame={endGame}
          handleChangeInput={handleChangeInput}
        />
      </div>
      <Modal modal={modal} onClose={onClose}>
        <div>WPM: {wpm}</div>
        <div>CPM: {cpm}</div>
        <div>Accurancy: {accuracy}</div>
      </Modal>
    </>
  );
}

export default App;
