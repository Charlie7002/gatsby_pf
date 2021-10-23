import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import ProjectsFilter from "../components/ProjectsFilter"
import ProjectsList from "../components/ProjectsList"
import Footer from "../components/Footer"
import Seo from "../components/SEO"

const NavSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  transition: var(--transition);
  .img-wrap {
    width: 65%;
    top: -3rem;
    right: 7rem;
    position: relative;
    display: flex;
    margin-bottom: 3rem;
    @media (max-width: 1700px) {
      right: 2rem;
    }
    @media (max-width: 1570px) {
      top: -1rem;
      right: 1rem;
    }
    @media (max-width: 1350px) {
      right: -7rem;
      width: 80%;
    }
    @media (max-width: 1100px) {
      top: 0;
    }
    @media (max-width: 1000px) {
      right: -76rem;
      height: 113px;
      position: absolute;
      width: 148%;
    }
    @media (max-width: 918px) {
      right: -60rem;
    }
    @media (max-width: 748px) {
      right: -60rem;
      width: 171%;
    }
    @media (max-width: 600px) {
      display: none;
    }
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
    font-weight: 800;
    animation: gradient 5s ease infinite;
  }
  display: flex;
  text-align: center;
  justify-content: center;
  text-transform: uppercase;
  @media (max-width: 1000px) {
    margin-top: 5rem;
  }
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

const Projects = ({ data, pageContext, location }) => {
  const projets = data.projets.nodes

  return (
    <Layout>
      <Seo
        title="Réalisations"
        description="Charlotte Cachet, développement web, réalisations"
        location={location}
      />
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
      <Footer />
    </Layout>
  )
}

export default Projects
