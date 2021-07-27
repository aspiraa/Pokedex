import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;

  div {
    margin-left: 40px;
  }

  img {
    max-height: 60px;
    margin: 0 10px;
  }
`;

export const Container = styled.div`
  width: 800px;
  height: 500px;
  display: flex;
  align-items: flex-end;
  position: relative;
  font-family: 'Roboto', sans-serif;

  .Pagination-Button {
    cursor: pointer;
    margin: 1px;
  }
`;

/* Box left */
export const BoxLeft = styled.div`
  background-color: #ff1e1e;
  width: 370px;
  height: 480px;
  justify-content: center;
  border: solid 2px;
  border-radius: 10px;
  overflow: hidden;
`;

/* Header in Box left */

export const LeftHeader = styled.div`
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

/*
  Footer in left Box
*/

export const BoxLeftFooter = styled.div`
  width: 370px;
  height: 140px;
  margin-top: 10px;
  display: flex;
`;

export const FooterLeft = styled.div`
  width: 149px;
  height: 69px;
  margin: 10px 0 0 50px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const FooterCircle = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 100%;
  background-color: #282828;
  border: solid 1px;
  box-shadow: 0px 4px 4px 0px #00000040;
`;

export const FooterButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .footerButton1 {
    width: 30px;
    height: 9px;
    border-radius: 10px;
    background-color: #1b5afc;
    border: solid 1px;
    box-shadow: 0px 4px 4px 0px #00000040;

    &:first-child {
      background-color: #cd0303;
    }
  }
`;

export const GreenRectangle = styled.div`
  width: 88px;
  height: 60px;
  background-color: #43a308;
  grid-column-start: 2;
  border: solid 1px;
  box-shadow: 0px 4px 4px 0px #00000040;
  text-align: center;
  font-size: 15px;
  display: flex;
  flex-wrap: wrap;
  align-content: space-around;
`;

export const ArrowButtons = styled.div`
  width: 60px;
  height: 60px;
  margin: 28px 0 0 45px;
  display: flex;
  align-items: center;
  justify-content: center;

  .arrowDiagonal {
    background-color: #282828;
    width: 60px;
    height: 12px;
    border-radius: 2px;
    border: 1px solid;
  }

  .arrowVertical {
    background-color: #282828;
    width: 12px;
    height: 60px;
    border-radius: 2px;
    border: 1px solid;
    position: absolute;
  }
`;

/* Right Box  */
export const ContainerRight = styled.div`
  height: 448px;
  width: 370px;
  display: flex;
  flex-direction: column;
  visibility: hidden;
`;
export const HorizontalDiv = styled.div`
  width: 195px;

  height: 27px;
  margin: 0 0 0 -20px;
  transform: skew(27deg);
  z-index: 1;
  background: #ff1e1e;
  overflow: hidden;
  border-right: solid 2px;
  border-top: solid 2px;
  border-bottom: solid 2px #ff1e1e;
  margin-bottom: -2px;
`;
/*  Form */

export const Search = styled.div`
  width: 250px;
  height: 30px;
  display: flex;
  align-items: center;

  input {
    width: 70%;
    transition: width 0.4s ease-in-out;
    height: 20px;
    border: none;
    border-bottom: 2px solid #282828;
    padding: 5px;
    background: none;
    &:focus {
      width: 100%;
      outline: none;
      box-shadow: none;
    }
    &::placeholder {
      color: #282828;
      font-family: 'Roboto', sans-serif;
    }
  }
  i {
    position: relative;

    left: -25px;
    top: 1px;
    color: #282828;
    width: 0;
  }
`;

export const BoxRight = styled.div`
  width: 370px;
  height: 427px;
  background-color: #ff1e1e;
  border: solid 2px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 10px;
`;

export const RightDisplay = styled.div`
  width: 285px;
  height: 220px;
  background-color: #43a308;
  border: 1px solid #000000;
  box-shadow: 0px 4px 4px 0px #00000040;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  ul {
    display: grid;
    grid-template-columns: 120px 120px;
    column-gap: 1em;
    row-gap: 0.3em;
    text-align: center;
  }
  li {
    margin: 3px auto;
    cursor: pointer;
    font-size: 16px;
    list-style-type: none;
    font-weight: 500;
  }
`;
export const ButtonsContainer = styled.div`
  display: flex;
  text-align: center;
  margin: 0;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  min-height: 35px;
  .Pagination-div {
    cursor: pointer;
    margin: 0 3px;
    display: flex;
  }

  .active {
    background-color: #ff6347;
  }
`;
export const PaginationButton = styled.div`
  div {
    cursor: pointer;
    margin: 5px;
    padding: 3px;
    border: solid black 1px;
    color: white;
    min-width: 20px;
    text-align: center;
  }
`;

export const Separator = styled.div`
  width: 40px;
  height: 445px;
  background-color: #e31414;
  position: absolute;
  border: 1px solid #000000;
  box-shadow: 0px 0px 4px 0px #00000040;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  right: 50.6%;
  z-index: 2;
  visibility: hidden;
`;

export const LineSeparator = styled.div`
  width: 40px;
  height: 30px;
  border-top: 2px solid #000000;
  border-bottom: 2px solid #000000;
  margin: 35px 0;
`;

/* Pokedex Closed */

export const CloseContainer = styled.div`
  height: 448px;
  width: 370px;
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 2px;
  z-index: 10;
`;
export const CloseContainerHorizontal = styled.div`
  width: 190px;
  overflow-x: clip;
  align-self: flex-end;
  border-right: solid 2px;
  align-self: flex-end;
`;

export const CloseHorizontalDiv = styled.div`
  width: 195px;
  height: 27px;
  margin: 0 0 0 20px;
  transform: skew(-27deg);
  z-index: 1;
  background: #ff1e1e;
  border: solid 4px;
  border-bottom: #ff1e1e;
  margin-bottom: -5px;
`;

export const CloseBoxLeft = styled.div`
  width: 366px;
  height: 427px;
  background-color: #ff1e1e;
  border: solid 2px;
  border-top: solid 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 0 0 8px 8px;
`;

export const PokedexIcon = styled.div`
  width: 140px;
  height: 140px;
  background: linear-gradient(#ff1e1e 47%, #282828 5%, #282828 52%, #fff 53%);
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 5px #282828;

  div {
    width: 40px;
    height: 40px;
    border-radius: 100%;
    background-color: white;
    border: solid 5px #282828;
    display: flex;
    justify-content: center;
    align-items: center;

    &::after {
      width: 80%;
      height: 80%;
      background-color: whitesmoke;
      content: '';
      border: solid 1px #282828;
      border-radius: 100%;
      box-shadow: 0px 4px 4px 0px #00000040;
    }
  }
`;
