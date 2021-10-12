import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import ProjectsFilter from "../components/ProjectsFilter"
import ProjectsList from "../components/ProjectsList"

const NavSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  .img-wrap {
    width: 60%;
    right: 0;
    position: relative;
    display: flex;
    margin-bottom: 5rem;
  }
  .bg-projetcs-nav {
    margin-top: -0.2rem;
  }
`

const TitleStyle = styled.div`
  h4 {
    transform: scaleY(90%);
    margin: 2rem auto 5rem;
    font-family: var(--title-font);
    font-size: 2.5rem;
    margin-bottom: 4rem;
    background: linear-gradient(to right, var(--orange) 0%, var(--violet) 100%);
    background-size: 200% 200%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 600;
    animation: gradient 5s ease infinite;
  }
  display: flex;
  text-align: center;
  justify-content: center;
  text-transform: uppercase;
`

export const query = graphql`
  query getProjets($tec: String) {
    projets: allContentfulProject(
      filter: { techno: { techno: { eq: $tec } } }
    ) {
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
`

const Projects = ({ data, pageContext }) => {
  const projets = data.projets.nodes

  return (
    <Layout>
      <NavSection>
        <div className="img-wrap">
          <StaticImage
            src="../assets/images/bgnav.png"
            alt=""
            placeholder="tracedSVG"
            width="1200"
            layout="constrained"
            height="150"
            className="bg-projetcs-nav"
          />
        </div>
      </NavSection>
      <TitleStyle>
        <h4>Mes réalisations</h4>
      </TitleStyle>

      <ProjectsFilter />
      <ProjectsList projets={projets} />
    </Layout>
  )
}

export default Projects
