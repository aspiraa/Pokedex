import React from 'react';
import { IProps } from './types';
import { InnerDisplay, OutDisplay } from './styles';

export const DisplayLeft = ({ newPokemon }: IProps): JSX.Element => {
  return (
    <OutDisplay>
      <InnerDisplay>
        <img
          src={
            newPokemon.sprites?.other.dream_world.front_default ??
            newPokemon.sprites?.front_default
          }
          alt="img not avaible"
        />
        <h4>
          #{newPokemon.order} {newPokemon.name?.toLocaleUpperCase()}
        </h4>
      </InnerDisplay>
    </OutDisplay>
  );
};
