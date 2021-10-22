import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import styled from "styled-components"
import slugify from "slugify"

const Filter = styled.div`
  max-width: var(--max-width);
  margin: 2rem auto;
  .tag-list {
    min-height: 60px;
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem 3rem;
    justify-content: center;
    align-items: center;
    .link {
      padding: 0.2rem 0.5rem;
      text-transform: capitalize;
      color: var(--violet-medium);
      border-radius: 0.25rem;
      background: var(--blue-light);
      transition: var(--transition);
      display: flex;
      align-items: center;
      justify-content: space-around;
      gap: 0.5rem;
      .number {
        background: var(--white);
        height: 1.2rem;
        width: 1.2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        color: var(--violet-medium);
      }
      &:hover {
        background: var(--violet-medium);
        color: var(--white);
        opacity: 0.65;
      }
    }
    a {
      &[aria-current="page"] {
        background: var(--violet-medium);
        color: white;
        .number {
          background: white;
          color: var(--violet-medium);
        }
        box-shadow: 0px 3px 20px 5px rgba(122, 126, 241, 0.2);
      }
    }
  }
`

const ProjectsFilter = ({ data }) => {
  const {
    allContentfulProject: { nodes: projets },
  } = useStaticQuery(graphql`
    {
      allContentfulProject {
        nodes {
          id
          techno {
            techno
          }
        }
      }
    }
  `)

  const listTec = {}
  projets.map(p => {
    Object.values(p.techno).forEach(tarray => {
      tarray.forEach(t => {
        if (listTec[t]) {
          listTec[t]++
        } else {
          listTec[t] = 1
        }
      })
    })
  })

  return (
    <Filter>
      <div className="tag-list">
        <Link to="/realisations" className="link">
          <p>Tout</p>
        </Link>
        {Object.entries(listTec).map(([key, value], i) => {
          const slug = slugify(key, { lower: true })
          return (
            <Link className="link" key={i} to={`/${slug}`}>
              <p>{key}</p>
              <p className="number"> {value}</p>
            </Link>
          )
        })}
      </div>
    </Filter>
  )
}

export default ProjectsFilter
