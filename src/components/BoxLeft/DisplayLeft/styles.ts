import styled from 'styled-components';

/* Displays */
export const OutDisplay = styled.div`
  width: 240px;
  height: 240px;
  background-color: white;
  margin: 10% auto 0 auto;
  border-radius: 30px 10px;
  overflow: hidden;
  font-family: sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 4px 0px #00000040;
`;
export const InnerDisplay = styled.div`
  background-color: #87cefa;
  border-radius: 10px;
  border: solid 1px;
  overflow: hidden;
  height: 182px;

  img {
    background-color: #87cefa;
    display: flex;
    max-width: 120px;
    max-height: 110px;
    margin: 0 auto;
    padding: 15px;
  }

  h4 {
    background-color: #87cefa;
    width: 180px;
    display: flex;

    justify-content: center;
    font-weight: bolder;
    color: white;
    font-size: 16px;
    margin: 5px auto;
    border-radius: 10px 10px;
  }
`;
