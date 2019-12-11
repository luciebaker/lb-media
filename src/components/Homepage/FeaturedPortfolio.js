import React from 'react'
import PortfolioItem from '../Portfoliopages/PortfolioItem'
import {useStaticQuery, graphql} from 'gatsby'
import FeaturedText from '../utilities/featuredText'
import AniLink from "gatsby-plugin-transition-link/AniLink"

const getFeaturedPortfolioItems = graphql `
{
    FeaturedPortfolioItems: allContentfulLbPortfolio(filter: {featured:{eq: true}}) {
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

const FeaturedPortfolio = () => {
    const response = useStaticQuery(getFeaturedPortfolioItems)
    const fpfitems = response.FeaturedPortfolioItems.edges
    return (


        <div className="container">
        <FeaturedText text="Featured work"/>
        <section className="fpf-portfolios">
        <div className="fpf-center">
            {fpfitems.map(({node}) => {
            return <PortfolioItem key={node.contentful_id} folio={node}/>
            })}
        </div>

        </section>
        <div className="text-center">
        <AniLink fade to='/portfolio'>
        <button className="btn-text btn btn-lg btn-bordered-teal mt-4">View Portfolio</button>
        </AniLink>
        </div>
        </div>
    )
}

export default FeaturedPortfolio