import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import styled from "styled-components"
import slugify from "slugify"

const Filter = styled.div`
  width: var(--max-width);
  margin: 2rem auto;
  .tag-list {
    min-height: 60px;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem 3rem;
    justify-content: center;
    align-items: center;
    .link {
      padding: 0.2rem 0.5rem;
      text-transform: capitalize;
      color: var(--orange);
      border-radius: 0.2rem;
      border: 1px var(--orange) solid;
      transition: var(--transition);
      display: flex;
      align-items: center;
      justify-content: space-around;
      gap: 0.5rem;
      .number {
        background: pink;
        height: 1.2rem;
        width: 1.2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        color: white;
      }
      &:hover {
        background: #ffe6e2;
      }
    }
    a {
      &[aria-current="page"] {
        background: var(--orange);
        color: white;
        .number {
          background: white;
          color: var(--orange);
        }
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
