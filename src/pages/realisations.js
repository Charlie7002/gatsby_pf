import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"

import { useStaticQuery, graphql } from "gatsby"
import ProjectsFilter from "../components/ProjectsFilter"
import ProjectsList from "../components/ProjectsList"

import List from "../templates/techno"

const NavSection = styled.div`
  .top {
    background: pink;
    height: 7rem;
  }
`

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
      <ProjectsFilter projets={projets} />
      <ProjectsList projets={projets} />
      {/* <List projets={projets} /> */}
    </Layout>
  )
}

export default Projects
