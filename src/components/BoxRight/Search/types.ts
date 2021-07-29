/* eslint-disable camelcase */
export interface IProps {
  listPokemon: NomesPokemons[];
  setPage: React.Dispatch<React.SetStateAction<number>>;
  setTotalPage: React.Dispatch<React.SetStateAction<number>>;
  setPokemonsFiltered: React.Dispatch<React.SetStateAction<NomesPokemons[]>>;
  calculateTotalPage: (array: NomesPokemons[]) => void;
}

export interface NomesPokemons {
  name: string;
  url: string;
}
