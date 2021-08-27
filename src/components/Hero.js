import React from "react"

import { StaticImage } from "gatsby-plugin-image"
import "../assets/css/main.css"
import styled from "styled-components"

const Hero = () => {
  return (
    <HeroContainer>
      <StaticImage
        className="hero-img"
        src="../assets/images/pf4.png"
        alt="home"
        quality="100"
        style={{ zIndex: 5 }}
        layout="fullWidth"
        formats={["auto", "webp", "avif"]}
      />
      <div className="hero-text">
        <h1>Yo les putes</h1>
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
  }
`

export default Hero
