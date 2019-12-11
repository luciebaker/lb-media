import React from 'react'
import PortfolioList from './PortfolioList'
import {useStaticQuery, graphql} from 'gatsby'

const getAllPortfolio = graphql `
{
AllPortfolioItems: allContentfulLbPortfolio {
    edges {
        node {
            name
            tech
            slug
            contentful_id
            description {
                description
            }
            media {
                fluid {
                    ...GatsbyContentfulFluid
                }
            }
        }
    }
}
}
`

const PortfolioAll = () => {
    const {AllPortfolioItems} = useStaticQuery(getAllPortfolio)

    return <PortfolioList AllPortfolioItems = {AllPortfolioItems}/>
    
    
}

export default PortfolioAll