import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const Nav = styled.nav`
  background: white;
`

const Navbar = () => {
  return (
    <Nav>
      <p>Logo</p>
      <ul>
        <li>
          <Link Link to="">
            Accueil
          </Link>
        </li>
        <li>
          <Link Link to="">
            A propos
          </Link>
        </li>
        <li>
          <Link Link to="">
            Projects
          </Link>
        </li>
        <li>
          <Link Link to="">
            Contact
          </Link>
        </li>
      </ul>
    </Nav>
  )
}

export default Navbar
