import React from "react"
import SectionTitle from "./SectionTitle"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import img from "../assets/icons/project.svg"
import imgDot from "../assets/images/blue_dot.svg"
import svg from "../assets/images/project-girl.svg"
import styled from "styled-components"
import { useStaticQuery, graphql, Link } from "gatsby"

const SectionProjectStyles = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 7rem;
  .projectWrap {
    display: flex;
    width: 100%;
    justify-content: space-between;
    gap: 1rem;
  }
  .project {
    height: 34.75rem;
    width: 30.75rem;
    box-shadow: var(--shadow-orangeblur);
    position: relative;
    border-radius: 1.1rem;
    display: grid;
    grid-template-rows: 1fr 1fr;
    z-index: 5;
    position: relative;
    background: var(--white);
    .technos {
      display: flex;
      width: 80%;
      justify-content: center;
      flex-wrap: wrap;
      gap: 0.8rem;
      align-self: center;
    }
    .techno {
      color: var(--violet);
      height: 1.95rem;
      padding: 0 1rem;
      background: #e7e7ff;
      border-radius: 0.2rem;
    }
  }
  .project:first-child {
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
  .imgproject {
    border-radius: 1.1rem 1.1rem 0 0;
  }
  h5 {
    color: var(--grey-title);
    text-transform: uppercase;
    text-align: center;
    align-self: center;
  }
  .wrap-text {
    display: grid;
    justify-items: center;
    grid-template-rows: 75px 70px 50px;
    height: 100%;
  }
  .link-project {
    width: 15.8rem;
    height: 2.9rem;
    font-family: var(--title-font);
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    color: var(--orange);
    background: var(--orange-light2);
    border: 1px solid var(--orange);
    border-radius: 0.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
  }
  .link_all {
    border-radius: var(--borderRadius-btn);
    background: var(--lg-violet-btn);
    box-shadow: 10px 10px 30px 2px rgba(179, 114, 243, 0.46);
    z-index: 5;
    position: relative;
  }
`

const SectionProject = ({ name }) => {
  const {
    allContentfulProject: { nodes: projets },
  } = useStaticQuery(graphql`
    {
      allContentfulProject(filter: { featured: { eq: true } }) {
        nodes {
          id
          title
          techno {
            techno
          }
          img {
            gatsbyImageData(
              height: 298
              layout: CONSTRAINED
              placeholder: TRACED_SVG
              quality: 100
              width: 490
            )
          }
        }
      }
    }
  `)

  return (
    <SectionProjectStyles>
      <SectionTitle name={name} img={img} imgDot={imgDot} id="project" />
      <div className="projectWrap">
        {projets.map(p => {
          const { title, id, img, techno } = p
          const pathToImage = getImage(img)

          //recup les technos
          const tec = []
          Object.values(techno).forEach(tarray =>
            tarray.forEach(t => tec.push(t))
          )

          return (
            <article className="project" key={id}>
              <div className="imgbox">
                <GatsbyImage
                  className="imgproject"
                  image={pathToImage}
                  alt={title}
                />
              </div>
              <div className="wrap-text">
                <h5>{title}</h5>
                <div className="technos">
                  {tec.map((tag, i) => (
                    <span key={i} className="techno">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link className="link-project" to="/">
                  Voir le project
                </Link>
              </div>
            </article>
          )
        })}
      </div>

      <Link className="btn_def link_all" to="/realisations">
        En voir plus
      </Link>
    </SectionProjectStyles>
  )
}

export default SectionProject
