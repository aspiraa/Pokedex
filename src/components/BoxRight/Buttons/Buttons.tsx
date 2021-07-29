import React from 'react';
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaAngleLeft,
  FaAngleRight,
} from 'react-icons/fa';
import { ButtonsContainer, PaginationButton } from './styles';
import { IProps } from './types';

export const Buttons = ({
  page,
  setPage,
  totalPage,
  updateList,
}: IProps): JSX.Element => {
  // Buttons Pagination

  const divHtml = document.querySelector('.Pagination-div');

  const calculateMaxVisibleButtons = () => {
    const maxVisibleButtons = 5;

    let maxLeft = page - Math.floor(maxVisibleButtons / 2);
    let maxRight = page + Math.floor(maxVisibleButtons / 2);

    if (maxLeft < 1) {
      maxLeft = 1;
      maxRight = maxVisibleButtons;
    }

    if (maxRight > totalPage) {
      maxLeft = totalPage - (maxVisibleButtons - 1);
      maxRight = totalPage;

      if (maxLeft < 1) maxLeft = 1;
    }
    return { maxLeft, maxRight };
  };

  const createButtons = (number: number) => {
    const button = document.createElement('div');
    button.onclick = () => {
      setPage(number - 1);
    };
    if (page === number - 1) {
      button.classList.add('active');
    }

    button.innerHTML = `${number}`;
    divHtml?.appendChild(button);
  };

  const updateButtons = () => {
    if (divHtml != null) {
      divHtml.innerHTML = '';
    }

    const { maxLeft, maxRight } = calculateMaxVisibleButtons();

    for (let i = maxLeft; i <= maxRight; i += 1) {
      createButtons(i);
    }
  };
  updateButtons();

  const nextPage = () => {
    let numero = page;
    setPage((numero += 1));
    if (page > totalPage - 2) {
      setPage((numero -= 1));
      updateList();
    }
  };
  const previusPage = () => {
    let numero = page;
    setPage((numero -= 1));
    if (page < 1) {
      setPage((numero += 1));
      updateList();
    }
  };

  return (
    <ButtonsContainer>
      <FaAngleDoubleLeft
        className="Pagination-Button"
        size={20}
        onClick={() => {
          setPage(0);
        }}
      />
      <FaAngleLeft
        className="Pagination-Button"
        size={20}
        onClick={() => {
          previusPage();
        }}
      />
      <PaginationButton className="Pagination-div" />
      <FaAngleRight
        className="Pagination-Button"
        size={20}
        onClick={() => {
          nextPage();
        }}
      />
      <FaAngleDoubleRight
        className="Pagination-Button"
        size={20}
        onClick={() => {
          setPage(totalPage - 1);
        }}
      />
    </ButtonsContainer>
  );
};
