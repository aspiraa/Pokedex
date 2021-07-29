import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { SearchContainer } from './styles';
import { IProps } from './types';

export const Search = ({
  listPokemon,
  setPage,
  setTotalPage,
  setPokemonsFiltered,
  calculateTotalPage,
}: IProps): JSX.Element => {
  const nameFilter = (e: string) => {
    const filtered = listPokemon.filter((p) =>
      p.name.startsWith(e.toLowerCase()),
    );
    setPage(0);
    setPokemonsFiltered(filtered);
    if (filtered.length !== 0) {
      calculateTotalPage(filtered);
    } else {
      setTotalPage(0);
    }
  };

  return (
    <SearchContainer>
      <input
        type="text"
        id="searchInput"
        autoComplete="off"
        placeholder="Pokemon Name"
        onChange={(e) => nameFilter(e.target.value)}
      />
      <i>
        <FaSearch />
      </i>
    </SearchContainer>
  );
};
