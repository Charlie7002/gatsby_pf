import React from "react"

import { StaticImage } from "gatsby-plugin-image"
import "../assets/css/main.css"
import styled from "styled-components"
import BtnViolet from "./BtnViolet"

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
        <h1>
          Hello,<br></br>je suis <span>Charlotte Cachet</span>
        </h1>
        <p>Concéptrice de site web</p>
        <div className="hero-btn">
          <BtnViolet link="#contact" />
        </div>
      </div>
    </HeroContainer>
  )
}

const HeroContainer = styled.section`
  //tips site gatsby pour placer text par dessus
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
    grid-template-columns: 10% 40% 60%;
    grid-template-rows: 1fr auto auto auto 1fr;
    h1 {
      grid-column: 2/3;
      grid-row: 2/3;
      margin: 0;
      justify-self: start;
    }
    p {
      grid-column: 2/3;
      grid-row: 3/4;
      justify-self: start;
      height: 5rem;
    }
    .hero-btn {
      grid-column: 2/3;
      grid-row: 4/5;
      justify-self: start;
      height: 5rem;
    }
  }
`

export default Hero
