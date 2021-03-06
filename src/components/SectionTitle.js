import React from "react"
import styled from "styled-components"

const TitleStyles = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;
  gap: 4rem;
  z-index: 5;
  height: 3rem;
  margin-bottom: 7rem;
  img {
    max-width: 4.3rem;
  }
  h2 {
    margin: 0;
    font-weight: 600;
    text-transform: uppercase;
    line-height: 0.9rem;
    transform: scaleY(90%);
  }

  @media (max-width: 640px) {
    gap: 0.9rem;
    img {
      max-width: 2.5rem;
    }
    h2 {
      font-size: 1.9rem;
      line-height: 2rem;
      text-align: center;
    }
  }
`

const SectionTitle = props => {
  const color =
    props.sectionname === "processus" || props.sectionname === "contact"
      ? "var(--violet)"
      : props.sectionname === "A propos"
      ? "var(--orange)"
      : props.sectionname === "Mes derniers projects" ||
        props.sectionname === "services"
      ? "var(--blue)"
      : "grey"
  return (
    <TitleStyles>
      <img src={props.img} alt="processus" />
      <h2 style={{ color }}>{props.sectionname} </h2>
      <img src={props.imgDot} className="dot" alt="" />
    </TitleStyles>
  )
}

export default SectionTitle
