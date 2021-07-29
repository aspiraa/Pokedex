import React, { useState } from 'react';

import { Buttons } from './Buttons';
import { RightDisplay } from './RightDisplay';
import { Search } from './Search';
import { ContainerRight, HorizontalDiv, SubContainer } from './styles';
import { IProps, NomesPokemons } from './types';

export const BoxRight = ({
  setPage,
  setTotalPage,
  totalPage,
  perpage,
  page,
  listPokemon,
  setPokemonName,
  calculateTotalPage,
}: IProps): JSX.Element => {
  const [pokemonsFiltered, setPokemonsFiltered] = useState<NomesPokemons[]>([]);

  // create de name itens

  const html = document.querySelector('.list');

  const createList = (name: string) => {
    const li = document.createElement('li');
    li.innerHTML = `${name[0].toUpperCase() + name.substring(1)}`;
    li.onclick = () => {
      setPokemonName(name);
    };
    html?.appendChild(li);
  };

  // make the limit of elements in display

  const updateList = () => {
    if (html != null) {
      html.innerHTML = '';
    }
    const start = page * perpage;
    const end = start + perpage;
    let paginatedItens = listPokemon.slice(start, end);

    if (pokemonsFiltered.length > 0) {
      paginatedItens = pokemonsFiltered.slice(start, end);
    }
    if (totalPage === 0) {
      const li = document.createElement('li');
      li.innerHTML = 'Pokemon not found';
      li.style.cursor = 'default';
      html?.appendChild(li);
      return 0;
    }
    return paginatedItens.map((e) => createList(e.name));
  };

  updateList();

  return (
    <ContainerRight id="BoxRight">
      <HorizontalDiv />
      <SubContainer>
        <Search
          setPage={setPage}
          setTotalPage={setTotalPage}
          setPokemonsFiltered={setPokemonsFiltered}
          listPokemon={listPokemon}
          calculateTotalPage={calculateTotalPage}
        />
        <RightDisplay />
        <Buttons
          page={page}
          totalPage={totalPage}
          setPage={setPage}
          updateList={updateList}
        />
      </SubContainer>
    </ContainerRight>
  );
};
