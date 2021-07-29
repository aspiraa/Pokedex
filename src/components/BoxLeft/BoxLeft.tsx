import React, { useEffect, useState } from 'react';
import { LeftHeader } from './LeftHeader';
import { DisplayLeft } from './DisplayLeft';
import { BoxLeftFooter } from './BoxLeftFooter';
import { CloseContainer } from './CloseContainer';
import { Container } from './styles';
import api from '../../services/api';

import { IProps, NomesPokemons, Pokemon } from './types';

export const BoxLeft = ({
  setPage,
  setPokemonName,
  pokemonName,
  listPokemon,
}: IProps): JSX.Element => {
  /* States */

  const [pokedexStatus, setPokedexStatus] = useState<boolean>(true);
  const [newPokemon, setNewPokemon] = useState<Pokemon>({
    name: 'bulbasaur',
    order: 1,
    weight: 69,
    height: 7,
    sprites: {
      front_default: '',
      other: {
        dream_world: {
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
        },
      },
    },
  });

  // Change the pokemon in display

  useEffect(() => {
    const loadPokemon = async () => {
      const { data } = await api.get(pokemonName);
      setNewPokemon(data);
    };
    loadPokemon();
  }, [pokemonName]);

  /* Pokedex Closing or open */

  const startPokedex = (): any => {
    const boxRight = document.getElementById('BoxRight');
    const separator = document.getElementById('Separator');
    const closed = document.getElementById('Closed');
    let status = 'hidden';

    setPokemonName('bulbasaur');
    setPage(0);
    // calculateTotalPage(listPokemon);

    const inputValue = document.getElementById(
      'searchInput',
    ) as HTMLInputElement;

    inputValue.value = '';

    if (pokedexStatus === true && closed) {
      setPokedexStatus(false);
      status = 'visible';
      closed.style.visibility = 'hidden';
    }
    if (pokedexStatus === false && closed) {
      setPokedexStatus(true);
      status = 'hidden';
      closed.style.visibility = 'visible';
    }

    if (boxRight && separator != null) {
      boxRight.style.visibility = status;
      separator.style.visibility = status;
    }
  };

  return (
    <Container>
      <CloseContainer />
      <LeftHeader startPokedex={startPokedex} />
      <DisplayLeft newPokemon={newPokemon} />
      <BoxLeftFooter height={newPokemon.height} weight={newPokemon.weight} />
    </Container>
  );
};
