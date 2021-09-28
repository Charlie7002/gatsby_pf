import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const Filter = styled.div`
  .tag-list {
    min-height: 60px;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem 3rem;
    justify-content: center;
    align-items: center;
    .link {
      background: pink;
      padding: 0.2rem 0.5rem;
      text-transform: capitalize;
      background: var(--orange-light);
      color: var(--orange);

      border-radius: 0.2rem;
    }
  }
`

const ProjectsFilter = ({ projets }) => {
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
        {Object.entries(listTec).map(([key, value], i) => (
          <Link className="link" key={i} to={`/${key}`}>
            {key}
            <span> {value}</span>
          </Link>
        ))}
      </div>
    </Filter>
  )
}

export default ProjectsFilter
