import React from "react"
import SectionTitle from "./SectionTitle"
import img from "../assets/icons/star.svg"
import imgDot from "../assets/images/blue_dot.svg"
import styled from "styled-components"
import { SvgAnimateDesign } from "./SvgAnimate"

const SectionListServices = styled.section`
  background: #ffffffd1;
  z-index: 5;
  position: relative;
  padding: 2rem;
  .wrap-services {
    display: flex;
    justify-content: space-between;
    align-items: center;

    article {
      .img-wrap {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      display: grid;
      grid-template-rows: 17rem 4rem 8rem;
      align-items: center;
      justify-items: center;
      img {
        object-fit: cover;
        width: 80%;
        height: 80%;
      }
      h6 {
        font-size: 2rem;
        margin: 0;
        font-weight: 500;
      }
      p {
        text-align: center;
        max-width: 290px;
        font-size: 1.2rem;
        font-weight: 300;
        margin: 0;
        align-self: start;
      }
    }
  }
`

const SectionServices = ({ sectionname }) => {
  return (
    <SectionListServices id="services">
      <SectionTitle sectionname={sectionname} img={img} imgDot={imgDot} />

      <div className="wrap-services">
        <article>
          <SvgAnimateDesign />

          <h6>Web design</h6>
          <p>
            Votre identité visuelle est crée sur mesure pour atteindre la cible
            désirée.
          </p>
        </article>

        <article>
          <SvgAnimateDesign />
          <h6>Développement</h6>
          <p>
            La création de votre site web indispensable pour améliorer la
            visibilité de votre activité.
          </p>
        </article>

        <article>
          <SvgAnimateDesign />
          <h6>Référencement</h6>
          <p>
            Optimisation du contenu votre site afin qu’il apparaisse dans les
            moteurs de recherche.
          </p>
        </article>
      </div>
    </SectionListServices>
  )
}

export default SectionServices
