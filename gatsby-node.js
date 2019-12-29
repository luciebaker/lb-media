const path = require("path")

exports.createPages = async({graphql, actions}) => {
    const {createPage} = actions

    const {data} = await graphql(`
    query {
        portfolios: allContentfulLbPortfolio {
            edges {
                node {
                    slug
                }
            }
        }
        posts: allContentfulLBblog {
            edges {
                node {
                slug
                }
            }
        }
    }
    `)

    data.portfolios.edges.forEach(({node}) => {
        createPage({
            path:`portfolio/${node.slug}`,
            component:path.resolve("./src/templates/portfolio-template.js"),
            context: {
                slug: node.slug,
            },
        })
    })

    data.posts.edges.forEach(({node}) => {
        createPage({
            path:`insights/${node.slug}`,
            component:path.resolve("./src/templates/insight-template.js"),
            context: {
                slug: node.slug,
            },
        })
    })

}

