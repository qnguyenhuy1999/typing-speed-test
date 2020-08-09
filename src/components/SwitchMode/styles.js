import styled from "styled-components";

export const Container = styled.label`
  display: block;
  position: relative;
  width: 70px;
  height: 30px;
`;

export const Background = styled.span`
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #440080;
  border-radius: 30px;
  transition: 0.25s;
  border: 2px solid #440080;
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
  z-index: 999;
`;

export const Moon = styled.i`
  font-size: 21px;
  position: absolute;
  right: 3px;
  top: 6px;
  color: #d78324;
`;

export const Sun = styled.i`
  font-size: 21px;
  position: absolute;
  left: 6px;
  top: 7px;
  color: #d78324;
`;
