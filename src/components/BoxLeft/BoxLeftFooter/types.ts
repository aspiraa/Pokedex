/* eslint-disable camelcase */
export interface Pokemon {
  name?: string;
  order?: number;
  weight: number;
  height: number;
  sprites?: {
    front_default: string;
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
}
