/* eslint-disable camelcase */
export interface IProps {
  listPokemon: NomesPokemons[];
  page: number;
  totalPage: number;
  perpage: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  setTotalPage: React.Dispatch<React.SetStateAction<number>>;
  calculateTotalPage: (array: NomesPokemons[]) => void;
  setPokemonName: React.Dispatch<React.SetStateAction<string>>;
}

export interface NomesPokemons {
  name: string;
  url: string;
}
