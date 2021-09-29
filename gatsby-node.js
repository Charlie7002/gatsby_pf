const path = require(`path`)
const slugify = require("slugify")

// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const technoTemplate = path.resolve(`src/pages/realisations.js`)

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

  result.data.allContentfulProject.nodes.forEach(projet => {
    projet.techno.techno.forEach(tec => {
      const tecSlug = slugify(tec, { lower: true })
      //envoi dans context tec
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
