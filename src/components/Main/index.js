import React from "react";

import {
  Main,
  Container,
  Title,
  Calc,
  Item,
  SpanTop,
  SpanBottom,
  ContainerText,
  ContainerString,
  Input,
  Button,
} from "./styles";

const style = {
  gridColumnStart: 1,
  gridColumnEnd: 4,
};

export default function (props) {
  const {
    countDown,
    paragraphs,
    yourString,
    isStart,
    accuracy,
    cpm,
    wpm,
    inputRef,
    startGame,
    endGame,
    handleChangeInput,
  } = props;

  return (
    <Main>
      <Container>
        <div className="content">
          <Title>TYPING SPEED TEST</Title>
          <Calc className="calc">
            <Item>
              <SpanTop>{wpm}</SpanTop>
              <SpanBottom>WORDS / MIN</SpanBottom>
            </Item>
            <Item>
              <SpanTop>{cpm}</SpanTop>
              <SpanBottom>CHARS / MIN</SpanBottom>
            </Item>
            <Item>
              <SpanTop>{accuracy}</SpanTop>
              <SpanBottom>% ACCURACY</SpanBottom>
            </Item>
            <Item style={style}>
              <SpanTop>{countDown}</SpanTop>
              <SpanBottom>SEC</SpanBottom>
            </Item>
          </Calc>
        </div>
      </Container>
      <ContainerText className="paragraph">{paragraphs}</ContainerText>
      <Input
        type="text"
        name="text"
        disabled={!isStart}
        placeholder="TYPE HERE"
        ref={inputRef}
        onKeyDown={handleChangeInput}
      />
      {yourString && (
        <ContainerString
          className="paragraph"
          dangerouslySetInnerHTML={{ __html: yourString }}
        />
      )}
      {isStart ? (
        <Button onClick={endGame}>Retry</Button>
      ) : (
        <Button onClick={startGame}>Let's start</Button>
      )}
    </Main>
  );
}