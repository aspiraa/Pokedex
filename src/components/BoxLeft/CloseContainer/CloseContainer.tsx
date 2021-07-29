import React from 'react';
import {
  Container,
  CloseBoxLeft,
  CloseContainerHorizontal,
  CloseHorizontalDiv,
  PokedexIcon,
} from './styles';

export const CloseContainer = (): JSX.Element => {
  return (
    <Container id="Closed">
      <CloseContainerHorizontal>
        <CloseHorizontalDiv />
      </CloseContainerHorizontal>
      <CloseBoxLeft>
        <PokedexIcon>
          <div />
        </PokedexIcon>
      </CloseBoxLeft>
    </Container>
  );
};
