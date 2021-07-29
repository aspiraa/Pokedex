import styled from 'styled-components';

export const SeparatorContainer = styled.div`
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
