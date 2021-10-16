import React from "react"
import SectionTitle from "./SectionTitle"
import img from "../assets/icons/star.svg"
import imgDot from "../assets/images/blue_dot.svg"
import styled from "styled-components"
import { services } from "../utils/constants"

const SectionListServices = styled.section`
  .wrap-services {
    display: flex;
    justify-content: space-between;
    align-items: center;
    article {
      display: grid;
      grid-template-rows: 17rem 4rem 8rem;
      align-items: center;
      justify-items: center;

      img {
        object-fit: cover;
        width: 90%;
        height: 90%;
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
        {services.map(service => {
          const { id, title, img, text } = service
          return (
            <article key={id}>
              <div className="img-wrap">
                <img src={img} alt={title} />
              </div>
              <h6>{title}</h6>
              <p>{text}</p>
            </article>
          )
        })}
      </div>
    </SectionListServices>
  )
}

export default SectionServices
