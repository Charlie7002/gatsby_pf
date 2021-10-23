import { Link } from "gatsby"
import React, { useState } from "react"
import styled from "styled-components"
import logo from "../assets/images/logocc.svg"
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
  @media (max-width: 1000px) {
    position: absolute;
  }
  .wrap-nav {
    width: var(--max-width);
    margin: 2.1rem auto 0;
    display: flex;
    justify-content: space-between;
    .logo-link {
      opacity: 0.8;
      transition: 0.4s all;
      &:hover {
        opacity: 1;
      }
      @media (max-width: 650px) {
        .logo-img {
          height: 4rem;
          margin-left: 2rem;
        }
      }
    }
  }
`
const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 0 10vw;
  position: relative;

  @media (max-width: 1000px) {
    display: flex;
    .hamburger-wrap {
      /* padding: 1rem; */
      position: ${props => (props.navbarOpen ? "fixed" : "absolute")};
      top: 0;
      right: 24px;
      z-index: 50;
    }
  }
`

const Navbox = styled.div`
  display: flex;
  height: 50%;
  justify-content: flex-end;
  align-items: center;
  font-size: 1.1rem;
  gap: 5.6rem;
  width: 55%;

  a {
    color: ${props => (props.open ? "#FFFFFF" : "var(--violet)")};
  }

  @media (max-width: 1000px) {
    padding-top: 5rem;
    background-color: var(--white);
    flex-direction: column;
    position: fixed;
    width: 100%;
    height: 100%;
    justify-content: flex-start;
    transition: all 0.3s ease-in;
    top: 0;
    left: ${props => (props.open ? "-100%" : "0")};
  }
`

const Hamburger = styled.div`
  background-color: ${props => (props.open ? "var(--violet)" : "#fff")};
  width: 30px;
  height: 3px;
  transition: all 0.3s linear;
  align-self: center;
  z-index: 100;
  border-radius: 5rem;
  position: relative;
  margin-top: 2rem;
  @media (max-width: 600px) {
    background: var(--violet);
  }

  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};
  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: ${props => (props.open ? "var(--violet)" : "#fff")};
    content: "";
    position: absolute;
    transition: all 0.3s linear;
    border-radius: 5rem;
    @media (max-width: 600px) {
      background: var(--violet);
    }
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
        <Link className="logo-link" to="/">
          <img className="logo-img" src={logo} alt="logo" />
        </Link>
        <Toggle
          navbarOpen={navbarOpen}
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          <div className="hamburger-wrap">
            {navbarOpen ? <Hamburger open /> : <Hamburger />}
          </div>
        </Toggle>
        {navbarOpen ? (
          <Navbox>
            <NavbarLinks
              navbarOpen={navbarOpen}
              setNavbarOpen={setNavbarOpen}
            />
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
