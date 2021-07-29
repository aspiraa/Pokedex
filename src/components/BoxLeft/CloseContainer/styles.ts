import styled from 'styled-components';

/* Pokedex Closed */

export const Container = styled.div`
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
