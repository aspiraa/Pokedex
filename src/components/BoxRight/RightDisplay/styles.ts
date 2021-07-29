import styled from 'styled-components';

export const RightDisplayContainer = styled.div`
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
