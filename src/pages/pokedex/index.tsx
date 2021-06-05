/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable camelcase */

import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { BigBox, BoxLeft, BoxRight, Display } from './styles';

interface Pokemon {
  name: string;
  order: number;
  weight: number;
  height: number;
  sprites: {
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
  const [newPokemon, setNewPokemon] = useState<Pokemon>({
    name: 'bulbasaur',
    order: 1,
    weight: 69,
    height: 7,
    sprites: {
      other: {
        dream_world: {
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
        },
      },
    },
  });
  const [listPokemon, setlistPokemon] = useState<NomesPokemons[]>([]);

  // carrega lista de pokemons

  const loadList = async () => {
    const { data } = await api.get('?limit=1118&offset=0');
    const pokemons: NomesPokemons[] = listPokemon
      ? [...listPokemon, ...data.results]
      : [...data.results];

    setlistPokemon(pokemons);
  };
  window.onload = () => loadList();

  // seleciona o pokemon

  const selectPokemon = (name: string) => {
    const loadPokemon = async () => {
      const { data } = await api.get(name);
      setNewPokemon(data);
    };
    loadPokemon();
  };

  // Paginaçao

  const html = {
    get(e: any) {
      return document.querySelector(e);
    },
  };

  const perpage = 20;
  const state = {
    page: 1,
    perpage,
    totalPage: Math.ceil(listPokemon?.length / perpage),
  };
  const list = {
    create(name: string) {
      const li = document.createElement('li');
      li.classList.add('item');
      li.innerHTML = name;
      li.onclick = () => {
        selectPokemon(name);
      };
      html.get('.list').appendChild(li);
    },
    async update() {
      const lista = await html.get('.list');
      if (lista != null) {
        lista.innerHTML = '';
      }

      const page = state.page - 1;
      const start = page * state.perpage;
      const end = start + perpage;
      const paginatedItens = listPokemon.slice(start, end);

      paginatedItens.map((e) => list.create(e.name));
    },
  };
  list.update();

  const controls: any = {
    nextPage() {
      state.page += 1;
      if (state.page > state.totalPage) {
        state.page -= 1;
      }

      list.update();
    },
    previusPage() {
      state.page -= 1;
      if (state.page < 1) {
        state.page += 1;
      }
      list.update();
    },
    goTo(page: number) {
      if (page < 1) {
        state.page = 1;
      }
      state.page = page;
      if (page > state.totalPage) {
        state.page = state.totalPage;
      }
    },
    // createListener() {
    //   html.get('.first').addEventListener('click', () => {
    //     controls.goTo(1);
    //   });
    //   html.get('.last').addEventListener('click', () => {
    //     controls.goTo(state.totalPage);
    //   });
    //   html.get('.next').addEventListener('click', () => {
    //     controls.nextPage();
    //   });
    //   html.get('.prev').addEventListener('click', () => {
    //     controls.previusPage();
    //     console.log('prev');
    //   });
    // },
  };

  return (
    <div>
      <BigBox>
        <BoxLeft>
          <Display>
            <img
              src={newPokemon.sprites.other.dream_world.front_default}
              alt=""
            />
            <h4>
              #{newPokemon.order} {newPokemon.name}
            </h4>
          </Display>
          <h3>Type : X </h3>
          <h3> Height : {newPokemon.height} </h3>
          <h3>weight : {newPokemon.weight} </h3>
        </BoxLeft>
        <BoxRight>
          <ul className="list">
            <li />
            {/* {listPokemon &&
              listPokemon.map((e) => (
                <>
                  <li
                    key={e.name}
                    onClick={() => {
                      selectPokemon(e.name);
                    }}
                  >
                    {e.name}
                  </li>
                </>
              ))} */}
          </ul>
          <button
            type="button"
            onClick={() => {
              controls.previusPage();
            }}
          >
            previus
          </button>
          <button
            type="button"
            onClick={() => {
              controls.nextPage();
            }}
          >
            next
          </button>
        </BoxRight>
      </BigBox>
      )
    </div>
  );
};

export default Pokedex;
