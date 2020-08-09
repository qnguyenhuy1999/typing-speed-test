import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import { paragraph } from 'txtgen';
import './App.css';

import Header from './components/Header';
import Main from './components/Main';
import Modal from './components/Modal';

let interval = null;
const limitTime = 60;

function App() {
  const inputRef = useRef(null);
  const yourAnswersRef = useRef([]);

  const [darkMode, setDarkMode] = useState(false);
  const [countDown, setCountDown] = useState(limitTime);
  const [paragraphs, setParagraph] = useState('');
  const [accuracy, setAccuracy] = useState(0);
  const [cpm, setCpm] = useState(0); // character per minute
  const [wpm, setWpm] = useState(0); // word per minute
  const [yourAnswers, setYourAnswers] = useState([]);
  const [isStart, setIsStart] = useState(false);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    setParagraph(`${paragraph()} ${paragraph()} ${paragraph()}`);
  }, []);

  useEffect(() => {
    if (countDown !== limitTime) {
      let correctAnswer = yourAnswersRef.current.filter(
        (i) => i.status === true
      );
      const timeRemains = limitTime - countDown;
      const _wpm = Math.round((correctAnswer.length / timeRemains) * 100);
      const totalCharacter = correctAnswer.reduce((a, b) => {
        return a + b.text.length;
      }, 0);
      const _cpm = Math.round((totalCharacter / timeRemains) * 100);

      setCpm(_cpm);
      setWpm(_wpm);
    }
  }, [countDown]);

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
    setCountDown(limitTime);
    setParagraph(`${paragraph()} ${paragraph()} ${paragraph()}`);
    setYourAnswers([]);
    yourAnswersRef.current = [];
    inputRef.current.value = '';
  };

  const handleChangeInput = (e) => {
    if (isStart) {
      console.log(e.keyCode);
      if (e.keyCode === 32 || e.key === ' ') {
        let text = inputRef.current.value.trim();
        let firstWord = paragraphs.split(' ')[0];
        let answer = {
          text: firstWord,
          status: false,
        };
        if (text === firstWord) {
          answer.status = true;
        }

        yourAnswersRef.current = [...yourAnswers, answer];
        setYourAnswers(yourAnswersRef.current); // add new value input of user
        let correctAnswer = yourAnswersRef.current.filter(
          (i) => i.status === true
        );

        setParagraph(paragraphs.split(' ').slice(1).join(' '));
        inputRef.current.value = '';

        const _accuracy = Math.round(
          (correctAnswer.length / yourAnswersRef.current.length) * 100
        );
        setAccuracy(_accuracy);
      }
    }
  };

  const onClose = () => {
    if (modal === true) {
      setModal(false);
      setWpm(0);
      setCpm(0);
      setAccuracy(0);
    }
  };

  return (
    <>
      <div
        className={classNames('App', {
          'dark-mode': darkMode,
          'modal-show': modal,
        })}
        onClick={onClose}
      >
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <Main
          countDown={countDown}
          paragraphs={paragraphs}
          yourAnswers={yourAnswers}
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
