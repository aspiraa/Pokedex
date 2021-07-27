/* eslint-disable camelcase */

import React, { useState, useEffect } from 'react';
import {
  FaAngleLeft,
  FaAngleRight,
  FaAngleDoubleRight,
  FaAngleDoubleLeft,
  FaSearch,
} from 'react-icons/fa';

import gitLogo from '../../assets/GitHub-Icon-White-Logo.wine.svg';
import linkedinLogo from '../../assets/LinkedIn-Wordmark-White-Logo.wine.svg';
import api from '../../services/api';
import {
  Container,
  BoxLeft,
  BoxLeftFooter,
  BoxRight,
  OutDisplay,
  InnerDisplay,
  PaginationButton,
  HorizontalDiv,
  ContainerRight,
  FooterLeft,
  FooterCircle,
  FooterButtons,
  GreenRectangle,
  ArrowButtons,
  LeftHeader,
  HeaderCircle,
  LittleCircles,
  RightDisplay,
  ButtonsContainer,
  Separator,
  LineSeparator,
  LineContainer,
  CloseContainer,
  CloseContainerHorizontal,
  CloseHorizontalDiv,
  CloseBoxLeft,
  PokedexIcon,
  Search,
  Header,
} from './styles';

interface Pokemon {
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

interface NomesPokemons {
  name: string;
  url: string;
}

const Pokedex: React.FC = () => {
  // States
  const [newPokemon, setNewPokemon] = useState<Pokemon>({
    name: 'bulbasaur',
    order: 1,
    weight: 69,
    height: 7,
    sprites: {
      front_default: '',
      other: {
        dream_world: {
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
        },
      },
    },
  });
  const [listPokemon, setlistPokemon] = useState<NomesPokemons[]>([]);
  const [pokemonName, setPokemonName] = useState<string>('bulbasaur');
  const [page, setPage] = useState<number>(0);
  const [pokedexStatus, setPokedexStatus] = useState<boolean>(true);
  const [pokemonsFiltered, setPokemonsFiltered] = useState<NomesPokemons[]>([]);

  const [totalPage, setTotalPage] = useState<number>(0);

  // Load the inicial pokemon list

  useEffect(() => {
    const loadList = async () => {
      const { data } = await api.get('?limit=1118&offset=0');
      const pokemons: NomesPokemons[] = listPokemon
        ? [...listPokemon, ...data.results]
        : [...data.results];

      setlistPokemon(pokemons);
    };
    loadList();
  }, []);

  // Change the pokemon in display

  useEffect(() => {
    const loadPokemon = async () => {
      const { data } = await api.get(pokemonName);
      setNewPokemon(data);
    };
    loadPokemon();
  }, [pokemonName]);

  // Disable default

  document.getElementById('searchInput')?.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
    }
  });

  // All about the list itens
  const perpage = 10;
  const html = document.querySelector('.list');
  // Set Total page

  const calculateTotalPage = (array: NomesPokemons[]) => {
    setTotalPage(Math.ceil(array?.length / perpage));
  };

  // Filter
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
      console.log(totalPage);
    }
  };

  useEffect(() => {
    calculateTotalPage(listPokemon);
  }, [listPokemon]);

  const createList = (name: string) => {
    const li = document.createElement('li');
    li.innerHTML = `${name[0].toUpperCase() + name.substring(1)}`;
    li.onclick = () => {
      setPokemonName(name);
    };
    html?.appendChild(li);
  };

  // calculate and list itens

  const updateList = () => {
    if (html != null) {
      html.innerHTML = '';
    }
    const start = page * perpage;
    const end = start + perpage;
    let paginatedItens = listPokemon.slice(start, end);

    if (pokemonsFiltered.length > 0) {
      paginatedItens = pokemonsFiltered.slice(start, end);
    }
    if (totalPage === 0) {
      const li = document.createElement('li');
      li.innerHTML = 'Pokemon not found';
      li.style.cursor = 'default';
      html?.appendChild(li);
      return 0;
    }
    return paginatedItens.map((e) => createList(e.name));
  };

  // Pagination

  const nextPage = () => {
    let numero = page;
    setPage((numero += 1));
    if (page > totalPage - 2) {
      setPage((numero -= 1));
      updateList();
    }

    updateList();
  };
  const previusPage = () => {
    let numero = page;
    setPage((numero -= 1));
    if (page < 1) {
      setPage((numero += 1));
      updateList();
    }
  };

  updateList();

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
      setPage(+number - 1);
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

  /* Pokedex Closing or open */

  const startPokedex = () => {
    const boxRight = document.getElementById('BoxRight');
    const separator = document.getElementById('Separator');
    const closed = document.getElementById('Closed');
    let status = 'hidden';

    setPokemonName('bulbasaur');
    setPage(0);
    calculateTotalPage(listPokemon);

    const inputValue = document.getElementById(
      'searchInput',
    ) as HTMLInputElement;

    inputValue.value = '';

    if (pokedexStatus === true && closed) {
      setPokedexStatus(false);
      status = 'visible';
      closed.style.visibility = 'hidden';
    }
    if (pokedexStatus === false && closed) {
      setPokedexStatus(true);
      status = 'hidden';
      closed.style.visibility = 'visible';
    }

    if (boxRight && separator != null) {
      boxRight.style.visibility = status;
      separator.style.visibility = status;
    }
  };

  return (
    <div>
      <Header>
        <div>
          <a href="https://github.com/aspiraa/Pokedex">
            <img src={gitLogo} alt="Github" />
          </a>
          <a href="https://www.linkedin.com/in/tulio-moreira-b35141205/">
            <img src={linkedinLogo} alt="Linkedin" />
          </a>
        </div>
      </Header>
      <Container>
        <BoxLeft>
          <CloseContainer id="Closed">
            <CloseContainerHorizontal>
              <CloseHorizontalDiv />
            </CloseContainerHorizontal>
            <CloseBoxLeft>
              <PokedexIcon>
                <div />
              </PokedexIcon>
            </CloseBoxLeft>
          </CloseContainer>
          <LeftHeader>
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
          </LeftHeader>
          <OutDisplay>
            <InnerDisplay>
              <img
                src={
                  newPokemon.sprites.other.dream_world.front_default ??
                  newPokemon.sprites.front_default
                }
                alt="img not avaible"
              />
              <h4>
                #{newPokemon.order} {newPokemon.name.toLocaleUpperCase()}
              </h4>
            </InnerDisplay>
          </OutDisplay>

          <BoxLeftFooter>
            <FooterLeft>
              <FooterCircle className="footerCircle" />

              <FooterButtons>
                <div className="footerButton1" />
                <div className="footerButton1" />
              </FooterButtons>
              <GreenRectangle>
                <span>Height: {newPokemon.height} </span>
                <span>Weight: {newPokemon.weight}</span>
              </GreenRectangle>
            </FooterLeft>
            <ArrowButtons>
              <div className="arrowDiagonal" />
              <div className="arrowVertical" />
            </ArrowButtons>
          </BoxLeftFooter>
        </BoxLeft>
        <Separator id="Separator">
          <LineSeparator />
          <LineSeparator />
        </Separator>
        <ContainerRight id="BoxRight">
          <HorizontalDiv />
          <BoxRight>
            <Search>
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
            </Search>
            <RightDisplay>
              <ul className="list" />
            </RightDisplay>
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
          </BoxRight>
        </ContainerRight>
      </Container>
    </div>
  );
};

export default Pokedex;
