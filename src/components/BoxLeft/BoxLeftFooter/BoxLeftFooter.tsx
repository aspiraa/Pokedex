import React from 'react';

import {
  ArrowButtons,
  Container,
  FooterButtons,
  FooterCircle,
  FooterLeft,
  GreenRectangle,
} from './styles';
import { Pokemon } from './types';

export const BoxLeftFooter = ({ height, weight }: Pokemon): JSX.Element => {
  return (
    <Container>
      <FooterLeft>
        <FooterCircle className="footerCircle" />

        <FooterButtons>
          <div className="footerButton1" />
          <div className="footerButton1" />
        </FooterButtons>
        <GreenRectangle>
          <span>Height: {height} </span>
          <span>Weight: {weight}</span>
        </GreenRectangle>
      </FooterLeft>
      <ArrowButtons>
        <div className="arrowDiagonal" />
        <div className="arrowVertical" />
      </ArrowButtons>
    </Container>
  );
};
