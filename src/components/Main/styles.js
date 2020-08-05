import styled from "styled-components";

export const Main = styled.div`
  width: 76%;
  margin: 40px auto;
  background: #8e8e8e14;
  padding: 2%;
  box-shadow: 0 0px 6px rgba(0, 0, 0, 0.2);
  border-radius: 0.25rem;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Title = styled.h2`
  font-size: 36px;
  text-transform: uppercase;
  text-align: center;
  margin: 0;
  padding: 0.5em 1em;
  letter-spacing: -0.04em;
  font-weight: 400;
  color: #0955ff;
  text-shadow: 3px 4px 6px rgb(0 0 0 / 53%);
`;

export const Calc = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 20px;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SpanTop = styled.span`
  font-size: 41px;
  font-weight: 500;
`;

export const SpanBottom = styled.span`
  letter-spacing: -1px;
  font-size: 14px;
`;

export const ContainerText = styled.div`
  border: 1px solid #8e8e8e;
  padding: 10px;
  word-break: break-all;
  white-space: nowrap;
  overflow: hidden;
  margin-top: 40px;
  font-size: 25px;
  text-overflow: ellipsis;
  background: #fff;
`;

export const ContainerString = styled.div`
  border: 1px solid #8e8e8e;
  padding: 10px;
  word-break: break-all;
  overflow: hidden;
  margin-top: 40px;
  font-size: 20px;
  background: #fff;
`;

export const Input = styled.input`
  margin: 40px auto 0;
  display: block;
  min-height: 33px;
  font-size: 20px;
  text-align: center;
`;

export const Button = styled.button`
  margin: 30px auto 0;
  display: block;
  width: 9%;
  font-size: 16px;
  padding: 8px 0;
  border-radius: 0.25rem;
  border: 1px solid #3690ff;
  background: #3690ff;
  color: #fff;
  cursor: pointer;
  &:focus {
    outline: none;
    border: 1px solid #dedede;
    transform: scale(0.9);
  }
`;
