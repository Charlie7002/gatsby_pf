import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavItem = styled(Link)`
  text-decoration: none;
  opacity: 0.7;
  position: relative;
  white-space: nowrap;
  transition: all 200ms ease-in;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    width: 0%;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 1px;
    background: ${props => (props.open ? "#7a7ef1" : "#fff")};
    opacity: 0.7;
    transition: 0.3s all;
  }
  &:hover,
  &.active-link {
    opacity: 1;
    &:after {
      width: 50%;
      opacity: 1;
    }
  }
  @media (max-width: 1000px) {
    font-size: 1.2rem;
    z-index: 6;
    &:after {
      background: var(--violet);
    }
  }
  .active-link {
    opacity: 1;
    &:after {
      width: 50%;
      opacity: 1;
    }
  }
`

const NavbarLinks = ({ navbarOpen, setNavbarOpen }) => {
  return (
    <>
      <NavItem activeClassName="active-link" to="/">
        Accueil
      </NavItem>
      <NavItem
        to="/#services"
        activeClassName="active-link"
        onClick={() => navbarOpen && setNavbarOpen(false)}
      >
        Services
      </NavItem>
      <NavItem activeClassName="active-link" to="/realisations">
        Réalisations
      </NavItem>
      <NavItem
        to="/#me"
        activeClassName="active-link"
        onClick={() => navbarOpen && setNavbarOpen(false)}
      >
        A propos
      </NavItem>
    </>
  )
}

export default NavbarLinks
