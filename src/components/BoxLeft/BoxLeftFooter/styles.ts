import styled from 'styled-components';

/*
  Footer in left Box
*/

export const Container = styled.div`
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
