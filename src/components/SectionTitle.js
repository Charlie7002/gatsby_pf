import React from "react"
import styled from "styled-components"

const SectionTitle = ({ img, imgDot, name }) => {
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
      color: ${name === "processus" || name === "Contact"
        ? "var(--violet)"
        : name === "A propos"
        ? "var(--orange)"
        : name === "Mes derniers projects"
        ? "var(--blue)"
        : "grey"};
      margin: 0;
      font-weight: 600;
      text-transform: uppercase;
      line-height: 0.9rem;

      transform: scaleY(90%);
    }
  `
  return (
    <TitleStyles>
      <img src={img} alt="processus" />
      <h2>{name} </h2>

      <img src={imgDot} className="dot" alt="" />
    </TitleStyles>
  )
}

export default SectionTitle
