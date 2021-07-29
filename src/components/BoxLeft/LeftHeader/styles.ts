import styled from 'styled-components';

/* Header in Box left */

export const Container = styled.div`
  width: 370px;
  height: 60px;
  background-color: #ff1e1e;

  display: flex;
  position: relative;
`;

export const HeaderCircle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  background-color: #127fce;
  border: solid 3px white;
  box-shadow: 0px 4px 4px 0px #00000040;
  margin: 9px 0 0 14px;
  cursor: pointer;
`;

export const LittleCircles = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 100%;
  border: solid 1px black;
  box-shadow: 0px 4px 4px 0px #00000040;
  margin: 8px 0 0 10px;
  &:nth-child(2) {
    background-color: #cd0303;
    margin-left: 30px;
  }
  &:nth-child(3) {
    background-color: #e4e90c;
  }
  &:nth-child(4) {
    background-color: #489b21;
  }
`;
/* Header Line */
export const LineContainer = styled.div`
  width: 370px;
  height: 26px;

  position: absolute;
  bottom: 0;
  display: flex;

  .downLine {
    width: 200px;
    border: 1px solid;
    align-self: flex-end;
    background: black;
  }
  .diagonalLine {
    border: 1px solid;
    height: 24px;
    transform: skew(-30deg);
    background: black;
    margin: 0 6px;
  }
  .upLine {
    background: black;
    width: 175px;
    height: 1px;
    border-top: 1px solid;
  }
`;
