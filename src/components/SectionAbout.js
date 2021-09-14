import React from "react"
import SectionTitle from "./SectionTitle"
import img from "../assets/icons/about.svg"
import imgDot from "../assets/images/orange_dot.svg"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

const SectionAboutStyles = styled.section`
  position: relative;
  .white {
    position: absolute;
    z-index: 2;
    width: 100vw;
    top: 50%;
    left: 49%;
    transform: translate(-50%, -50%);
    background: #fffaf7;
    height: 45rem;
  }
  .about {
    display: grid;
    grid-template-columns: minmax(34.5rem, 20rem) 1fr;
    height: 26rem;
    position: relative;
    z-index: 2;
  }
  .about-img {
    border-radius: 100%;
  }
  .img-box {
    justify-self: end;
    .about-img {
      box-shadow: 0px 20px 40px 10px rgba(254, 160, 143, 0.2);
    }
  }
  .about-text {
    font-size: 1.25rem;
    p {
      margin-bottom: 2rem;
    }
  }
`

const SectionAbout = ({ name }) => {
  return (
    <SectionAboutStyles>
      <div className="white"></div>
      <SectionTitle name={name} img={img} imgDot={imgDot} />
      <div className="about">
        <div className="about-text">
          <p>
            Je suis développeuse et designer web passionnée par la création
            d’expériences utilisateur engageantes et divertissantes.
          </p>
          <p>
            A coté de activité freelance je suis actuellement en poste chez
            Vooter en tant que developpeuse front-end.
          </p>
          <p>
            Je suis située à Limours en Essonne mais nos jours travailler
            ensemble, à distance, de manière efficace quelque soit l’éloignement
            géographique est tout à fait possible !
          </p>
        </div>
        <div className="img-box">
          <StaticImage
            src="../assets/images/about.jpg"
            alt="about"
            backgroundColor="white"
            quality={100}
            height={250}
            width={250}
            className="about-img"
            layout="constrained"
          />
        </div>
      </div>
    </SectionAboutStyles>
  )
}

export default SectionAbout
