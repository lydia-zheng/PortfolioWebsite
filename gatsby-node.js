const path = require('path') //node core module

module.exports.onCreateNode = ({node, actions}) => {
const {createNodeField} = actions

if(node.internal.type == "MarkdownRemark") {
  const slug = path.basename(node.fileAbsolutePath, '.md')

  createNodeField({
    node,
    name: 'slug',
    value: slug
  }
  )
  }
}

exports.createPages = async({graphql, actions}) => {
  const { createPage } = actions
  const blogTemplate = path.resolve('./src/templates/blogs.js');

  const res = await graphql(`
    query {
      allMarkdownRemark{
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  res.data.allMarkdownRemark.edges.forEach((edge) => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug
      }
    })
  })
  //1. get path to the template
  //2. get markdown file data
  //3. create new pages 

}

