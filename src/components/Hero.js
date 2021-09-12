import React from "react"

import { StaticImage } from "gatsby-plugin-image"
import "../assets/css/main.css"
import styled from "styled-components"
import { AiFillGithub } from "react-icons/Ai"

const Hero = () => {
  return (
    <HeroContainer>
      <StaticImage
        className="hero-img"
        src="../assets/images/pfhero.png"
        alt="home"
        quality="100"
        style={{ zIndex: 5 }}
        layout="fullWidth"
        formats={["auto", "webp", "avif"]}
      />
      <div className="hero-text">
        <h2>Hello,</h2>
        <h1>
          je suis <span>Charlotte Cachet</span>
        </h1>
        <p>Développeuse web </p>
        <Button className="hero-btn" as="a" href="#contact">
          Contact
        </Button>
      </div>
    </HeroContainer>
  )
}

const HeroContainer = styled.section`
  //tips site gatsby pour placer text par dessus
  margin-bottom: 6rem;
  display: grid;
  .hero-img {
    grid-area: 1/1;
  }
  .hero-text {
    z-index: 5;
    grid-area: 1/1;
    position: relative;
    place-items: center;
    display: grid;
    grid-template-columns: 10% 14% 35% 55%;
    grid-template-rows: 1fr auto auto auto 6% 1fr;
    h2 {
      grid-column: 2 / span 2;
      grid-row: 2/3;
      font-size: 3.5rem;
      justify-self: start;
    }
    h1 {
      grid-column: 2 / span 2;
      grid-row: 3/4;
      margin: 0;
      font-size: 3.8rem;
      justify-self: start;
      margin-bottom: 2rem;
      span {
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
    }
    p {
      grid-column: 2 / span 2;
      grid-row: 4/5;
      justify-self: start;
      height: 5rem;
      font-size: 1.2rem;
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
  grid-column: 2/3;
  grid-row: 5/6;
  justify-self: start;
  color: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
  justify-self: stretch;
  align-self: stretch;
  font-size: 1.3rem;
  font-family: var(--title-font);

  border-radius: var(--borderRadius-btn);
  background: var(--lg-violet-btn);
`
export default Hero
