/* eslint-disable camelcase */
export interface IProps {
  children?: string;
  pokemonName: string;
  listPokemon: NomesPokemons[];
  setPokemonName: React.Dispatch<React.SetStateAction<string>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  calculateTotalPage?: (array: NomesPokemons[]) => void;
}

export interface NomesPokemons {
  name: string;
  url: string;
}

export interface Pokemon {
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
