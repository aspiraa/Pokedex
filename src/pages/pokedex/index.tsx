/* eslint-disable camelcase */

import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { Container, BoxLeft, BoxRight, Display } from './styles';

interface Pokemon {
  name: string;
  order: number;
  weight: number;
  height: number;
  sprites: {
    front_default: string;
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
}

interface NomesPokemons {
  name: string;
  url: string;
}

const Pokedex: React.FC = () => {
  // states
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
  const [listPokemon, setlistPokemon] = useState<NomesPokemons[]>([]);
  const [pokemonName, setPokemonName] = useState<string>('bulbasaur');
  const [page, setPage] = useState<number>(0);
  const [perpage, setPerpage] = useState<number>(20);
  const [totalPage, setTotalPage] = useState<number>(0);

  // load the inicial pokemon list

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

  // change the pokemon in display

  useEffect(() => {
    const loadPokemon = async () => {
      const { data } = await api.get(pokemonName);
      setNewPokemon(data);
    };
    loadPokemon();
  }, [pokemonName]);

  // all about the list itens

  useEffect(() => {
    setTotalPage(Math.ceil(listPokemon?.length / perpage));
  }, [listPokemon, perpage]);

  const html = document.querySelector('.list');

  const create = (name: string) => {
    const li = document.createElement('li');
    li.innerHTML = name;
    li.onclick = () => {
      setPokemonName(name);
    };
    html?.appendChild(li);
  };

  const update = () => {
    if (html != null) {
      html.innerHTML = '';
    }
    const start = page * perpage;
    const end = start + perpage;
    const paginatedItens = listPokemon.slice(start, end);

    paginatedItens.map((e) => create(e.name));
  };

  // Pagination

  const nextPage = () => {
    let numero = page;
    setPage((numero += 1));
    if (page > totalPage) {
      setPage((numero -= 1));
    }
    update();
  };
  const previusPage = () => {
    let numero = page;
    setPage((numero -= 1));
    if (page < 1) {
      setPage((numero += 1));
      update();
    }
  };

  update();

  // goTo(page: number) {
  //   if (page < 1) {
  //     state.page = 1;
  //   }
  //   state.page = page;
  //   if (page > state.totalPage) {
  //     state.page = state.totalPage;
  //   }
  // },

  return (
    <div>
      <Container>
        <BoxLeft>
          <Display>
            <img
              src={
                newPokemon.sprites.other.dream_world.front_default ??
                newPokemon.sprites.front_default
              }
              alt="img not avaible"
            />
            <h4>
              #{newPokemon.order} {newPokemon.name}
            </h4>
          </Display>
          <h3> Height : {newPokemon.height} </h3>
          <h3>weight : {newPokemon.weight} </h3>
        </BoxLeft>
        <BoxRight>
          <ul className="list" />
          <button
            type="button"
            onClick={() => {
              previusPage();
            }}
          >
            previus
          </button>
          <button
            type="button"
            onClick={() => {
              nextPage();
            }}
          >
            next
          </button>
        </BoxRight>
      </Container>
      )
    </div>
  );
};

export default Pokedex;
