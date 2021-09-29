import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

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

const projectsList = ({ projets }) => {
  return (
    <ProjectsStyles>
      <div className="wrap-list">
        {projets.map((projet, i) => {
          return <SingleProjet key={i} {...projet} />
        })}
      </div>
    </ProjectsStyles>
  )
}

const SingleProjet = ({ title, description, id, link, img, techno }) => {
  const pathToImage = getImage(img)

  //recup les technos
  const tec = []
  Object.values(techno).forEach(tarray => tarray.forEach(t => tec.push(t)))

  return (
    <article key={id}>
      <GatsbyImage className="imgproject" image={pathToImage} alt={title} />
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
}

export default projectsList
