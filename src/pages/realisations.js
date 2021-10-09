import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"

import { graphql } from "gatsby"
import ProjectsFilter from "../components/ProjectsFilter"
import ProjectsList from "../components/ProjectsList"

const NavSection = styled.div`
  .top {
    background: pink;
    height: 7rem;
  }
`

const TitleStyle = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  text-transform: uppercase;
  line-height: 0.9rem;
  transform: scaleY(90%);
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

  // const {
  //   allContentfulProject: { nodes: projets },
  // } = useStaticQuery(graphql`
  //   {
  //     allContentfulProject {
  //       nodes {
  //         description
  //         id
  //         title
  //         link
  //         techno {
  //           techno
  //         }
  //         img {
  //           gatsbyImageData(
  //             layout: CONSTRAINED
  //             placeholder: TRACED_SVG
  //             height: 298
  //             quality: 100
  //             width: 450
  //           )
  //         }
  //       }
  //     }
  //   }
  // `)

  return (
    <Layout>
      <NavSection>
        <div className="top"></div>
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
