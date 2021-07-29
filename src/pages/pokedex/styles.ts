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
