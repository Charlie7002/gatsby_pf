import React from "react"

import { StaticImage } from "gatsby-plugin-image"
import "../assets/css/main.css"
import styled from "styled-components"
import { AiFillGithub, AiOutlineLinkedin } from "react-icons/Ai"

const Hero = () => {
  return (
    <HeroContainer>
      <StaticImage
        className="hero-img"
        src="../assets/images/pfhero5.png"
        alt="home"
        quality="100"
        style={{ zIndex: 5 }}
        layout="fullWidth"
        formats={["auto", "webp", "avif"]}
      />
      <div className="hero-text">
        <h2>Hello,</h2>
        <h1>
          Je suis <span>Charlotte Cachet</span>
        </h1>
        <p>Développeuse web </p>
        <Button className="hero-btn" as="a" href="#contact">
          Contact
        </Button>
        <div className="links">
          <a href="https://www.linkedin.com/in/charlotte-cachet-devweb">
            <AiOutlineLinkedin />
          </a>
          <a href="https://github.com/Charlie7002">
            <AiFillGithub />
          </a>
        </div>
      </div>
    </HeroContainer>
  )
}

const HeroContainer = styled.div`
  //tips site gatsby pour placer text par dessus
  margin-bottom: 0;
  display: grid;
  /* position: relative;
  z-index: 1; */
  .hero-img {
    grid-area: 1/1;
  }
  .hero-text {
    z-index: 5;
    grid-area: 1/1;
    position: relative;
    place-items: center;
    display: grid;
    width: var(--max-width);
    margin: 0 auto;
    grid-template-columns: 19% 35% 55%;
    grid-template-rows: 35% 7% 7% 10% 55px 10% 1fr;
    h2 {
      grid-column: 1 / span 2;
      grid-row: 2/3;
      font-size: 2rem;
      justify-self: start;
      font-weight: 400;
      margin: 0;
    }
    h1 {
      grid-column: 1 / span 2;
      grid-row: 3/4;
      font-size: 2.8rem;
      justify-self: start;
      span {
        font-weight: 600;
      }
    }
    p {
      grid-column: 1 / span 2;
      grid-row: 4/5;
      justify-self: start;
      height: 5rem;
      font-family: var(--title-font);

      font-size: 3.5rem;
      font-weight: 700;
      margin-bottom: 3rem;
      background: linear-gradient(
        to right,
        var(--orange) 0%,
        var(--violet) 100%
      );
      background-size: 200% 200%;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-weight: 700;
      animation: gradient 5s ease infinite;
    }

    .links {
      grid-column: 1 /2;
      grid-row: 6/7;
      color: var(--violet);
      font-size: 1.8rem;
      display: flex;
      justify-self: stretch;
      justify-content: center;
      margin-top: 1rem;
      gap: 1.5rem;
      a {
        text-decoration: none;
        color: var(--violet);
        &:visited {
          color: var(--violet);
        }
      }
    }
  }
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`
const Button = styled.button`
  grid-column: 1/2;
  grid-row: 5/6;
  justify-self: start;
  color: var(--white);
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-self: stretch;
  align-self: stretch;
  font-size: 1.1rem;
  font-family: var(--title-font);
  border-radius: var(--borderRadius-btn);
  background: var(--lg-violet-btn);
  box-shadow: 10px 10px 30px 2px rgba(179, 114, 243, 0.46);
`
export default Hero
