/* eslint-disable camelcase */

import React, { useState, useEffect } from 'react';

import gitLogo from '../../assets/GitHub-Icon-White-Logo.wine.svg';
import linkedinLogo from '../../assets/LinkedIn-Wordmark-White-Logo.wine.svg';
import api from '../../services/api';
import { Container, Header } from './styles';
import { BoxLeft } from '../../components/BoxLeft';
import { Separator } from '../../components/Separator';
import { BoxRight } from '../../components/BoxRight';

interface NomesPokemons {
  name: string;
  url: string;
}

const Pokedex: React.FC = () => {
  // States

  const [listPokemon, setlistPokemon] = useState<NomesPokemons[]>([]);
  const [pokemonName, setPokemonName] = useState<string>('bulbasaur');
  const [page, setPage] = useState<number>(0);
  const [totalPage, setTotalPage] = useState<number>(0);

  // Load the inicial pokemon list

  useEffect(() => {
    const loadList = async () => {
      const { data } = await api.get('?limit=1118&offset=0');
      const pokemons: NomesPokemons[] = listPokemon
        ? [...listPokemon, ...data.results]
        : [...data.results];

      setlistPokemon(pokemons);
    };
    loadList();
  }, []);

  // Disable default

  document.getElementById('searchInput')?.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
    }
  });

  // Set Total page and the number of itens in screen

  const perpage = 10;

  const calculateTotalPage = (array: NomesPokemons[]) => {
    setTotalPage(Math.ceil(array?.length / perpage));
  };

  useEffect(() => {
    calculateTotalPage(listPokemon);
  }, [listPokemon]);

  return (
    <div>
      <Header>
        <div>
          <a href="https://github.com/aspiraa/Pokedex">
            <img src={gitLogo} alt="Github" />
          </a>
          <a href="https://www.linkedin.com/in/tulio-moreira-b35141205/">
            <img src={linkedinLogo} alt="Linkedin" />
          </a>
        </div>
      </Header>
      <Container>
        <BoxLeft
          listPokemon={listPokemon}
          pokemonName={pokemonName}
          setPage={setPage}
          setPokemonName={setPokemonName}
        />
        <Separator />
        <BoxRight
          setPage={setPage}
          setTotalPage={setTotalPage}
          totalPage={totalPage}
          perpage={perpage}
          page={page}
          listPokemon={listPokemon}
          setPokemonName={setPokemonName}
          calculateTotalPage={calculateTotalPage}
        />
      </Container>
    </div>
  );
};

export default Pokedex;
