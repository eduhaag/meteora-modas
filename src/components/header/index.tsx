import { NavLink } from 'react-router-dom'
import {
  ButtonMenu,
  HeaderContainer,
  NavBar,
  SearchBarContainer,
} from './styles'

import Logo from '../../assets/site/logo_mobile.png'
import { useState } from 'react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <HeaderContainer>
      <div className="header-menu">
        <NavLink to="/">
          <img src={Logo} alt="Logo da Meteora" />
        </NavLink>
        <NavBar isOpen={isMenuOpen}>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/1"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Nossas lojas
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/2"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Novidades
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/3"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Promoções
              </NavLink>
            </li>
          </ul>
        </NavBar>
        <ButtonMenu
          isOpen={isMenuOpen}
          onClick={() => {
            setIsMenuOpen(!isMenuOpen)
          }}
        ></ButtonMenu>
      </div>
      <SearchBarContainer>
        <input type="text" placeholder="Digite o produto" />
        <button>Buscar</button>
      </SearchBarContainer>
    </HeaderContainer>
  )
}
