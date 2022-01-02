import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import ScrollToTop from "react-scroll-to-top"
import Arrow from "../components/Arrow"
import ProjectsFilter from "../components/ProjectsFilter"
import ProjectsList from "../components/ProjectsList"
import Footer from "../components/Footer"
import Seo from "../components/SEO"

const NavSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  transition: var(--transition);
  .img-wrap {
    overflow: hidden;
    margin-left: 500px;
    @media (max-width: 1000px) {
      right: 0;
      img {
        display: none;
      }
      background: var(--lg-violet-btn);
      opacity: 0.7;
      width: 60px;
      position: absolute;
      height: 60px;
      right: 1.7rem;
      top: 1.2rem;
      border-radius: 50%;
    }
    @media (max-width: 650px) {
      top: 1.9rem;
    }
    @media (max-width: 600px) {
      background: none;
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
    @media (max-width: 650px) {
      margin: 3rem 1rem;
    }
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
      sort: { fields: order }
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
            src="../assets/images/nav3.png"
            alt=""
            placeholder="tracedSVG"
            width={650}
            layout="constrained"
            height={100}
            className="bg-projetcs-nav"
          />
        </div>
      </NavSection>
      <ScrollToTop
        smooth
        component={<Arrow />}
        style={{
          borderRadius: "40px",
          boxShadow: "0px 9px 25px  rgba(255, 158, 152, 0.8)",
          backgroundColor: "#ffbbae",
          transition: "all, .3s",
          zIndex: 59,
        }}
      />
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
