import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const Nav = styled.nav`
  width: 100%;
  position: fixed;

  display: grid;
  /* @supports not (grid-template-columns: subgrid) {
    --rows: repeat(14, 1fr);
  }
  grid-template-columns: var(--rows, subgrid); */
  grid-template-columns: repeat(14, 1fr);
  grid-template-rows: 5rem;
  top: 0;
  z-index: 10;
  grid-column: 1/-1;
  grid-template-rows: 1/2;
  background: #7fffd447;
  color: #fff;

  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 7.5rem;
  }

  .home {
    grid-column: 7/8;
  }
  .about {
    grid-column: 9/10;
  }
  .release {
    grid-column: 11/12;
  }
  .contact {
    grid-column: 13/14;
  }
  .nav-link {
    justify-self: center;
    color: white;
  }
`

const Navbar = () => {
  return (
    <Nav>
      <div className="logo nav-link">
        <StaticImage src="../assets/icons/logo.svg" alt="logo"></StaticImage>
      </div>

      <Link className="home nav-link" Link to="">
        Accueil
      </Link>

      <Link className="about nav-link" Link to="">
        A propos
      </Link>

      <Link className="release nav-link" to="">
        Réalisations
      </Link>

      <Link className="contact nav-link" to="">
        Contact
      </Link>
    </Nav>
  )
}

export default Navbar
