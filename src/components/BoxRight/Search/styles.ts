import styled from 'styled-components';

export const SearchContainer = styled.div`
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
    padding: 5px 5px 5px 10px;
    background: none;
    color: #fff;
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
