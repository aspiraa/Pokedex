import styled from 'styled-components';

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

export const SubContainer = styled.div`
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
