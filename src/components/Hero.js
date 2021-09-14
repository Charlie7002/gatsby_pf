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
        <div className="links">
          <AiFillGithub /> <AiOutlineLinkedin />
        </div>
      </div>
    </HeroContainer>
  )
}

const HeroContainer = styled.div`
  //tips site gatsby pour placer text par dessus
  margin-bottom: 0;
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
    color: var(--violet);
    grid-template-columns: 10% 14% 35% 55%;
    grid-template-rows: 33% 5% 5% 12% 6% 10% 1fr;
    h2 {
      grid-column: 2 / span 2;
      grid-row: 2/3;
      font-size: 2.7rem;
      justify-self: start;
      margin: 0;
    }
    h1 {
      grid-column: 2 / span 2;
      grid-row: 3/4;

      font-size: 2.5rem;
      justify-self: start;

      span {
        font-weight: 600;
        /* background: linear-gradient(
          to right,
          var(--orange) 0%,
          var(--violet) 100%
        );
        background-size: 200% 200%;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-weight: 700;
        animation: gradient 5s ease infinite; */
      }
    }
    p {
      grid-column: 2 / span 2;
      grid-row: 4/5;
      justify-self: start;
      height: 5rem;
      font-family: var(--title-font);
      letter-spacing: 0.1rem;
      font-size: 3.5rem;
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
      grid-column: 2 /3;
      grid-row: 6/7;
      color: var(--violet);
      font-size: 1.8rem;
      display: flex;
      justify-self: stretch;
      justify-content: center;
      margin-top: 1rem;
      gap: 1.5rem;
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
  letter-spacing: 0.1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-self: stretch;
  align-self: stretch;
  font-size: 1.3rem;
  font-family: var(--title-font);
  border-radius: var(--borderRadius-btn);
  background: var(--lg-violet-btn);
  box-shadow: 10px 10px 30px 2px rgba(179, 114, 243, 0.46);
`
export default Hero
