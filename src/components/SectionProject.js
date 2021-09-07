import React from "react"
import SectionTitle from "./SectionTitle"
import img from "../assets/icons/project.svg"
import imgDot from "../assets/images/blue_dot.svg"
import svg from "../assets/images/project-girl.svg"
import styled from "styled-components"

const SectionProjectStyles = styled.section`
  background: yellow;
  width: 100%;
  .projectWrap {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  .project {
    height: 34.75rem;
    width: 30.75rem;
    background: pink;
    position: relative;
  }
  .project:first-child {
    color: purple;
    &:before {
      content: "";
      position: absolute;
      height: 25.3rem;
      width: 12.8rem;
      background: url(${svg}) no-repeat center / contain;
      top: -184px;
      left: -101px;
      z-index: 34;
    }
  }
`

const SectionProject = ({ name }) => {
  return (
    <SectionProjectStyles>
      <SectionTitle name={name} img={img} imgDot={imgDot} />
      <div className="projectWrap">
        <div className="project">blalbz</div>
        <div className="project"></div>
      </div>
    </SectionProjectStyles>
  )
}

export default SectionProject
