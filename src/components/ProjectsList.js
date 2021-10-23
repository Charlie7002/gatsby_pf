import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ProjectsStyles = styled.section`
  .wrap-list {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-top: 5rem;
  }
  article {
    display: grid;
    grid-template-columns: 40% 60%;
    box-shadow: 0px 10px 40px rgba(103, 106, 187, 0.2);
    border-radius: 1rem;
    @media (max-width: 900px) {
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      max-width: 28rem;
      justify-content: center;
      align-items: center;
      gap: 1rem;
    }
  }
  .technos {
    display: flex;
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.3rem;
    align-self: center;
  }

  .wrap-text {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 2rem 0;
    justify-content: space-around;
    align-items: center;
    span.label {
      font-weight: 600;
    }
    h5 {
      text-transform: uppercase;
    }
    p {
      text-align: center;
    }
    @media (max-width: 970px) {
      padding: 1rem 0;
    }
    @media (max-width: 900px) {
      min-height: 14.5rem;
      padding: 1rem;
      gap: 1rem;
    }
  }
  .btn {
    color: var(--white);
    width: 23.7rem;
    height: 3.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    font-size: 1.25rem;
    font-family: var(--title-font);
    border-radius: var(--borderRadius-btn);
    background: var(--lg-violet-btn);
    transition: var(--transition);
    opacity: 0.8;
    cursor: pointer;
    &:hover {
      box-shadow: 10px 10px 30px 2px rgba(179, 114, 243, 0.46);
      opacity: 1;
      transform: translateY(-0.1rem);
    }
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
        <p>{description}</p>
        <div className="technos">
          <span className="label">Outils utilisés</span>:
          {tec
            .map((tag, i) => (
              <span key={i} className="techno">
                {tag}
              </span>
            ))
            .reduce((prev, curr) => [prev, ", ", curr])}
        </div>
        <a className="btn" href={link} rel="noopener" target="_blank">
          Voir le site
        </a>
      </div>
    </article>
  )
}

export default projectsList
