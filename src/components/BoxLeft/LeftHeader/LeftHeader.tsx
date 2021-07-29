import React from 'react';
import { IProps } from './types';
import {
  Container,
  HeaderCircle,
  LineContainer,
  LittleCircles,
} from './styles';

export const LeftHeader = ({ startPokedex }: IProps): JSX.Element => {
  return (
    <Container>
      <HeaderCircle
        onClick={() => {
          startPokedex();
        }}
      />
      <LittleCircles />
      <LittleCircles />
      <LittleCircles />
      <LineContainer>
        <div className="downLine" />
        <div className="diagonalLine" />
        <div className="upLine" />
      </LineContainer>
    </Container>
  );
};
