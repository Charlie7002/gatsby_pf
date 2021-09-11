import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { CgMenuRightAlt } from "react-icons/Cg"

const Nav = styled.nav`
  margin-top: 0.4rem;
  height: 6rem;
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  z-index: 100;
  width: 100%;
  padding: 0 3rem;
  .linksColumn {
    display: none;
  }
  .linksinline {
    display: flex;
    width: 48%;
    justify-content: space-between;
    margin-right: 4.8rem;
    font-size: 1.1rem;
  }
  .nav-link {
    color: var(--white);
    opacity: 0.7;
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
  }
  .nav-link:hover {
    opacity: 1;
    &:after {
      width: 50%;
      opacity: 1;
    }
  }
`

const Navbar = () => {
  return (
    <Nav>
      <StaticImage
        className="logo"
        src="../assets/icons/logo.svg"
        alt="logo"
      ></StaticImage>
      <div className="linksColumn">
        <button type="button">
          <CgMenuRightAlt className="menu" />
        </button>
      </div>
      <div className="linksinline">
        <Link className="home nav-link" to="">
          Accueil
        </Link>

        <Link className="about nav-link" to="">
          A propos
        </Link>

        <Link className="release nav-link" to="">
          Réalisations
        </Link>

        <Link className="contact nav-link" to="">
          Contact
        </Link>
      </div>
    </Nav>
  )
}

export default Navbar
