import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import ProjectsFilter from "../components/ProjectsFilter"

const ProjectsStyles = styled.section`
  .wrap-list {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
  article {
    display: grid;
    grid-template-columns: 40% 60%;
    border: 1px solid lightpink;
  }
  .technos {
    display: flex;
    width: 100%;
    justify-content: start;
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
  .wrap-text {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: start;
    align-items: flex-start;
    padding-left: 2rem;
  }
`

const NavSection = styled.div`
  .top {
    background: pink;
    height: 7rem;
  }
`

console.clear()
const Projects = () => {
  const {
    allContentfulProject: { nodes: projets },
  } = useStaticQuery(graphql`
    {
      allContentfulProject {
        nodes {
          description
          id
          title
          link
          techno {
            techno
          }
          img {
            gatsbyImageData(
              layout: CONSTRAINED
              placeholder: TRACED_SVG
              height: 298
              quality: 100
              width: 450
            )
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <NavSection>
        <div className="top"></div>
      </NavSection>

      <ProjectsStyles>
        <ProjectsFilter projets={projets} />
        <div className="wrap-list">
          {projets.map(p => {
            const { title, description, id, link, img, techno } = p
            const pathToImage = getImage(img)
            //recup les technos
            const tec = []
            Object.values(techno).forEach(tarray =>
              tarray.forEach(t => tec.push(t))
            )
            return (
              <article key={id}>
                <GatsbyImage
                  className="imgproject"
                  image={pathToImage}
                  alt={title}
                />
                <div className="wrap-text">
                  <h5>{title}</h5>
                  <div className="technos">
                    {tec.map((tag, i) => (
                      <span key={i} className="techno">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p>{description}</p>
                  <a href={link} target="_blank" rel="web site">
                    Voir le site
                  </a>
                </div>
              </article>
            )
          })}
        </div>
      </ProjectsStyles>
    </Layout>
  )
}

export default Projects
