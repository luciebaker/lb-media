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

}

