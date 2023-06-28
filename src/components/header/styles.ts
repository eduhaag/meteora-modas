import styled from 'styled-components'

import HamburguerMenuIcon from '../../assets/site/hamburger-menu-icon.svg'
import CloseMenuIcon from '../../assets/site/close-menu-icon.svg'
import { mediaQueries } from '../../styles/themes/media-queries'

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;

  .header-menu {
    display: flex;
    width: 100%;
    justify-content: space-between;
    height: 3.625rem;
    background-color: ${(props) => props.theme.black};
    align-items: center;
    padding: 0 1.25rem;
  }

  @media (min-width: ${mediaQueries.TABLET}) {
    flex-direction: row;

    .header-menu {
      justify-content: flex-start;
      padding: 0 1.43rem;
    }
  }

  @media (min-width: ${mediaQueries.DESKTOP}) {
    .header-menu {
      padding: 0 2.5rem;
      font-size: 1rem;
    }
  }
`

interface MenuProps {
  isOpen: boolean
}

export const ButtonMenu = styled.button<MenuProps>`
  width: 1.125rem;
  height: 1.125rem;
  z-index: 1;
  background-image: ${(props) =>
    props.isOpen ? `url(${CloseMenuIcon})` : `url(${HamburguerMenuIcon})`};
  background-color: transparent;
  border: 0;

  @media (min-width: ${mediaQueries.TABLET}) {
    display: none;
  }
`

export const NavBar = styled.nav<MenuProps>`
  position: absolute;
  top: 0;
  right: 0;
  background-color: ${(props) => props.theme['gray-300']};
  padding: 2.265rem 1.5rem;
  display: ${(props) => (props.isOpen ? 'block' : 'none')};

  li {
    list-style: none;
    padding: 0.75rem 0;

    &:not(:last-child) {
      border-bottom: 1px solid ${(props) => props.theme['gray-100']};
    }
  }

  li a {
    color: ${(props) => props.theme.white};
    text-decoration: none;

    &.active {
      color: ${(props) => props.theme.yellow};
      font-weight: 700;
    }
  }

  @media (min-width: ${mediaQueries.TABLET}) {
    display: flex;
    position: relative;
    background-color: transparent;
    font-size: 0.812rem;

    ul {
      display: flex;
      flex-direction: row;
      gap: 1.25rem;

      li:not(:last-child) {
        border: none;
      }
    }
  }

  @media (min-width: ${mediaQueries.DESKTOP}) {
    font-size: 1rem;
  }
`

export const SearchBarContainer = styled.div`
  display: flex;
  height: 5.43rem;
  background-color: ${(props) => props.theme.white};
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 0.5rem;

  input {
    padding-left: 1rem;
    width: 14rem;
    height: 2.18rem;
    border: 1px solid ${(props) => props.theme.black};
  }

  button {
    padding: 0 0.75rem;
    background-color: transparent;
    border: 1px solid ${(props) => props.theme.black};
    font-weight: 500;
    height: 2.18rem;
  }

  @media (min-width: ${mediaQueries.TABLET}) {
    background-color: ${(props) => props.theme.black};
    height: 58px;
    padding-right: 1.43rem;

    input {
      width: 9rem;
      font-size: 0.812rem;
    }

    button {
      color: ${(props) => props.theme.white};
      border-color: ${(props) => props.theme.white};
      font-size: 0.812rem;
    }
  }

  @media (min-width: ${mediaQueries.DESKTOP}) {
    input {
      width: 10.625rem;
      font-size: 1rem;
    }

    button {
      font-size: 1rem;
      font-weight: 500;
    }
  }
`
