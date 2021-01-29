const path = require("path")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const markdownTemplate = path.resolve(`src/pages/index.js`)

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
          	html
          	id
            frontmatter {
              path
              title
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: markdownTemplate,
        context: {}, // additional data can be passed via context
      })
    })
  })
}
