const setUpTechno = technos => {
  const allTechno = {}
  technos.forEach(tec => {
  
      if (allTechno[tec]) {
        allTags[tag] = allTags[tag] + 1
      } else {
        allTags[tag] = 1
      }

  })

  const newTags = Object.entries(allTags).sort((a, b) => {
    const [firstTag] = a
    const [secondTag] = b
    return firstTag.localeCompare(secondTag)
  })

  return newTags
}

export default setUpTechno
