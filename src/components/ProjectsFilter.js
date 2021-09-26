import React from "react"

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

  return Object.entries(listTec).map(([key, value]) => {
    return (
      <div>
        <p>
          {key}
          {value}
        </p>
      </div>
    )
  })
}

export default ProjectsFilter
