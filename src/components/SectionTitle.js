import React from "react"
import styled from "styled-components"

const violet = "var(--violet)"

const SectionTitle = ({ img, imgDot, name }) => {
  const TitleStyles = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    img {
      width: 4.3rem;
    }
    h2 {
      color: ${name === "processus"
        ? "var(--violet)"
        : name === "A propos"
        ? "var(--orange)"
        : name === "Mes derniers projects" || name === "Contact"
        ? "var(--blue)"
        : "grey"};
      margin: 0;
    }
  `
  return (
    <TitleStyles>
      <img src={img} alt="processus" />
      <h2>{name} </h2>
      <div className="dot">
        <img src={imgDot} alt="" />
      </div>
    </TitleStyles>
  )
}

export default SectionTitle
