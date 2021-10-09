import React from "react"
import styled, { css } from "styled-components"

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
    color: ${props =>
      (props.sectionname === "processus" || props.sectionname) === "Contact"
        ? "var(--violet)"
        : props.sectionname === "A propos"
        ? "var(--orange)"
        : props.sectionname === "Mes derniers projects"
        ? "var(--blue)"
        : "grey"};

    margin: 0;
    font-weight: 600;
    text-transform: uppercase;
    line-height: 0.9rem;
    transform: scaleY(90%);
  }
`

const SectionTitle = props => {
  return (
    <TitleStyles>
      <img src={props.img} alt="processus" />
      <h2 sectionname={props.sectionname}>{props.sectionname} </h2>
      <img src={props.imgDot} className="dot" alt="" />
    </TitleStyles>
  )
}

export default SectionTitle
