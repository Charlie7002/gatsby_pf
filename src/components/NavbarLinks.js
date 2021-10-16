import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavItem = styled(Link)`
  text-decoration: none;
  opacity: 0.7;
  position: relative;
  white-space: nowrap;
  margin: 0 1vw;
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
    background: white;
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
  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
  .active-link {
    opacity: 1;
    &:after {
      width: 50%;
      opacity: 1;
    }
  }
`

const NavAnchorLink = styled.a`
  text-decoration: none;
  opacity: 0.7;
  position: relative;
  white-space: nowrap;
  margin: 0 1vw;
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
    background: white;
    opacity: 0.7;
    transition: 0.3s all;
  }
  &:hover {
    opacity: 1;
    &:after {
      width: 50%;
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
  .active-link {
    opacity: 1;
    &:after {
      width: 50%;
      opacity: 1;
    }
  }
`
const NavbarLinks = ({ navbarOpen }) => {
  return (
    <>
      <NavItem activeClassName="active-link" to="/">
        Accueil
      </NavItem>
      <NavAnchorLink href="/#services" className="services">
        Services
      </NavAnchorLink>
      <NavItem activeClassName="active-link" to="/realisations">
        Réalisations
      </NavItem>
      <NavAnchorLink href="/#me" className="me">
        A propos
      </NavAnchorLink>
    </>
  )
}

export default NavbarLinks
