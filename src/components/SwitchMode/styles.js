import styled from "styled-components";

export const Container = styled.label`
  display: block;
  position: relative;
  width: 55px;
  height: 30px;
`;

export const Background = styled.span`
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 30px;
  transition: 0.25s;
  border: 2px solid #eeeeee;
`;

export const Mask = styled.span`
  display: block;
  position: absolute;
  width: 30px;
  height: 30px;
  background-color: white;
  box-shadow: 1px 1px 3px silver;
  border-radius: 50%;
  left: 2px;
  top: 2px;
  transition: 0.25s;
  cursor: pointer;
`;
