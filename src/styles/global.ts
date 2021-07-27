import { createGlobalStyle } from 'styled-components';
import pokemonBackground from '../assets/wp2595093-pokemon-background.jpg';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
  }
  body{
    background-image: url(${pokemonBackground});
  }
  #root{
    max-width: 800px;
    height: 100%;
    margin: 0 auto;
    padding: 40px 20px;


  }
`;
