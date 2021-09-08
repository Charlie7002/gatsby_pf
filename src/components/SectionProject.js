import React from "react"
import SectionTitle from "./SectionTitle"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import img from "../assets/icons/project.svg"
import imgDot from "../assets/images/blue_dot.svg"
import svg from "../assets/images/project-girl.svg"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

console.clear()

const SectionProjectStyles = styled.section`
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
  .img {
    height: 250px;
    width: 250px;
  }
`

const SectionProject = ({ name }) => {
  const {
    allContentfulProject: { nodes: projets },
  } = useStaticQuery(graphql`
    {
      allContentfulProject {
        nodes {
          id
          title
          img {
            gatsbyImageData(
              layout: CONSTRAINED
              placeholder: TRACED_SVG
              width: 300
              height: 200
            )
          }
        }
      }
    }
  `)

  return (
    <SectionProjectStyles>
      <SectionTitle name={name} img={img} imgDot={imgDot} />
      <div className="projectWrap">
        {projets.map(p => {
          console.log(p)
          const { title, id, img } = p
          const pathToImage = getImage(img)
          console.log(pathToImage)
          return (
            <article className="project" key={id}>
              <div className="img">
                <GatsbyImage image={pathToImage} alt={title} />
              </div>
              <h5>{title}</h5>
              {/* <div className="technos">
                {p.techno.forEach(el => {
                  return <p>{el}</p>
                })}
              </div> */}
            </article>
          )
        })}
      </div>
    </SectionProjectStyles>
  )
}

export default SectionProject
