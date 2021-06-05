import styled from 'styled-components';

export const BigBox = styled.div`
  width: 800px;
  height: 500px;
  margin: 80px auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BoxLeft = styled.div`
  background-color: red;
  width: 300px;
  height: 400px;
  justify-content: center;
  border: solid 1px;
`;

export const Display = styled.div`
  width: 200px;
  height: 200px;
  background-color: white;
  margin: 20% auto 0 auto;
  border-radius: 30px 10px;
  text-align: center;
  align-items: center;
  overflow: hidden;
  font-family: sans-serif;

  img {
    background-color: white;
    display: flex;
    max-width: 150px;
    max-height: 120px;
    margin: 0 auto;
    padding: 20px;
  }

  h4 {
    background-color: black;
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

export const BoxRight = styled.div`
  background-color: red;
  width: 300px;
  height: 350px;
  border: solid 1px;
  text-align: center;
  padding: 5px;

  button {
    margin: 0px 10px 5px 10px;
    bottom: 0;
    align-self: flex-end;
    padding: 3px;
    width: 100px;
  }
  ul {
    display: grid;
    grid-template-columns: 100px 100px;
  }
  li {
    margin: 3px auto;
    cursor: pointer;
    font-size: 16px;
    list-style-type: none;
    font-weight: 500;
  }
`;

export const Form = styled.form``;
