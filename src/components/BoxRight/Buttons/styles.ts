import styled from 'styled-components';

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
