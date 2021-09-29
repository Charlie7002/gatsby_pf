const path = require(`path`)
const slugify = require("slugify")

// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const technoTemplate = path.resolve(`src/templates/techno.js`)

  const result = await graphql(`
    query {
      allContentfulProject {
        nodes {
          techno {
            techno
          }
        }
      }
    }
  `)

  console.log(
    "************************************************************************"
  )
  result.data.allContentfulProject.nodes.forEach(projet => {
    console.log(projet)
    projet.techno.techno.forEach(tec => {
      const tecSlug = slugify(tec, { lower: true })
      createPage({
        path: `/${tecSlug}`,
        component: technoTemplate,
        context: {
          tec: tec,
        },
      })
    })
  })
}
