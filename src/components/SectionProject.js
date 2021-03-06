import React from "react"
import SectionTitle from "./SectionTitle"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import img from "../assets/icons/project.svg"
import imgDot from "../assets/images/blue_dot.svg"
import svg from "../assets/images/project-girl.svg"
import styled from "styled-components"
import { useStaticQuery, graphql, Link } from "gatsby"

const SectionProjectStyles = styled.section`
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
    border-top: #f0f3ff solid 0.1rem;
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
    transition: 0.4s all;
    &:hover {
      filter: hue-rotate(20%);
      filter: hue-rotate(30deg);
      transform: translateY(-2px);
      box-shadow: 0px 10px 40px 2px rgba(179, 114, 243, 0.7);
    }
  }
  @media (max-width: 1330px) {
    .projectWrap {
      justify-content: center;
      padding: 0 4rem;
    }
  }

  @media (max-width: 970px) {
    .projectWrap {
      margin-top: 2rem;
      flex-direction: column;
      align-items: center;
      gap: 3rem;
    }
  }

  @media (max-width: 620px) {
    margin-top: 2rem;
    .projectWrap {
      margin-top: -8rem;
    }
    .project {
      width: auto;
      height: auto;
      grid-template-columns: 300px;
    }
    .img-box {
      height: 200px;
    }
    .wrap-text {
      padding-bottom: 2rem;
      grid-template-rows: 48px 70px 36px;
      border-top: #f0f3ff solid 0.1rem;
    }
    .technos {
      padding: 0.5rem 0;
    }
    .link-project {
      margin-top: 1rem;
    }
    .project:first-child::before {
      display: none;
    }
  }
`

const SectionProject = ({ sectionname }) => {
  const {
    allContentfulProject: { nodes: projets },
  } = useStaticQuery(graphql`
    {
      allContentfulProject(filter: { featured: { eq: true } }, limit: 2) {
        nodes {
          id
          title
          link
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
      <SectionTitle
        sectionname={sectionname}
        img={img}
        imgDot={imgDot}
        id="project"
      />
      <div className="projectWrap">
        {projets.map(p => {
          const { title, id, img, techno, link } = p
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
                <a href={link} className="link-project">
                  Voir le project
                </a>
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
