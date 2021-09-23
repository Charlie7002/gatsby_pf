import { Link } from "gatsby"
import React, { useState } from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

import NavbarLinks from "./NavbarLinks"

const Navigation = styled.nav`
  height: 10vh;
  display: flex;
  position: absolute;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 0 2vw;
  z-index: 55;
  width: 100%;
  align-self: center;
  @media (max-width: 768px) {
    position: absolute;
    height: 6vh;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
  }
  .wrap-nav {
    width: var(--max-width);
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
`
const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 0 10vw;
  @media (max-width: 768px) {
    display: flex;
  }
`

const Navbox = styled.div`
  display: flex;
  height: 50%;
  justify-content: flex-end;
  align-items: center;
  font-size: 1.1rem;
  gap: 7rem;
  width: 55%;
  a {
    color: ${props => (props.open ? "#FFFFFF" : "#ff917d")};
  }

  @media (max-width: 768px) {
    padding-top: 2rem;
    background-color: var(--orange-light);
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    transition: all 0.3s ease-in;
    top: 0;
    left: ${props => (props.open ? "-100%" : "0")};
  }
`

const Hamburger = styled.div`
  background-color: ${props => (props.open ? "#ff917d" : "#fff")};
  width: 30px;
  height: 3px;
  transition: all 0.3s linear;
  align-self: center;
  z-index: 100;
  border-radius: 5rem;
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};
  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: ${props => (props.open ? "#ff917d" : "#fff")};
    content: "";
    position: absolute;
    transition: all 0.3s linear;
    border-radius: 5rem;
  }
  ::before {
    transform: ${props =>
      props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
    border-radius: 5rem;
  }
  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
    border-radius: 5rem;
  }
`

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  return (
    <Navigation>
      <div className="wrap-nav">
        <StaticImage
          className="logo"
          src="../assets/icons/logo.svg"
          alt="logo"
        ></StaticImage>
        <Toggle
          navbarOpen={navbarOpen}
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          {navbarOpen ? <Hamburger open /> : <Hamburger />}
        </Toggle>
        {navbarOpen ? (
          <Navbox>
            <NavbarLinks navbarOpen={navbarOpen} />
          </Navbox>
        ) : (
          <Navbox open>
            <NavbarLinks />
          </Navbox>
        )}
      </div>
    </Navigation>
  )
}

export default Navbar
