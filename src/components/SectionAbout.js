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
    background: #fffdfb;
    height: 45rem;
  }
  .about {
    display: grid;
    grid-template-columns: minmax(34.5rem, 20rem) 1fr;
    height: 26rem;
    position: relative;
    z-index: 2;
    @media (max-width: 650px) {
      margin-top: 9rem;
    }
  }
  .about-img {
    border-radius: 100%;
  }
  .img-box {
    justify-self: end;
    .about-img {
      box-shadow: 0px 20px 40px 10px rgba(254, 160, 143, 0.2);
    }
    @media (max-width: 650px) {
      margin-top: 13rem;
      max-width: 150px;
    }
  }
  .about-text {
    font-size: 1.25rem;
    p {
      margin-bottom: 2rem;
    }
  }
  @media (max-width: 900px) {
    padding: 1rem;
    .img-box {
      margin-top: 6rem;
    }
    img {
      height: 150px;
    }
    .about {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .about-text {
      max-width: 500px;
      order: 2;
      font-size: 1rem;
      padding: 1rem;
      margin: 1rem auto 5rem;
    }
  }
`

const SectionAbout = ({ sectionname }) => {
  return (
    <SectionAboutStyles id="me">
      <div className="white"></div>
      <SectionTitle
        sectionname={sectionname}
        img={img}
        imgDot={imgDot}
        id="about"
      />
      <div className="about">
        <div className="about-text">
          <p>
            Je suis développeuse et designer web passionnée par la création
            d’expériences utilisateur engageantes et divertissantes.
          </p>
          <p>
            A coté de mon activité freelance je suis actuellement en poste chez
            Vooter en tant que developpeuse front-end.
          </p>
          <p>
            Je suis située à Limours en Essonne mais de nos jours travailler
            ensemble à distance, de manière efficace quelque soit l’éloignement
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
            placeholder="tracedSVG"
          />
        </div>
      </div>
    </SectionAboutStyles>
  )
}

export default SectionAbout
