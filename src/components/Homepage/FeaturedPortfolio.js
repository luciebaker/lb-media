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

// <div className="container">
//     <FeaturedText text="Featured work"/>

//         <section>
//         <div className="row">
            
//             <div className="col-md-6 mt-4">
//             <div className="fpf-card">
//                 <img className="fpf-card-img-top" alt="featured-website" src="https://picsum.photos/200/150/?random"/>
//                 <div className="fpf-card-block">
//                     <h4 className="fpf-card-title">Capriccio</h4>
//                     <h5 className="fpf-card-tech">Gatsby, QraphQL, React, Sass, Contentful (CMS), Netlify (Host)</h5>
//                     <div className="fpf-card-text">
//                         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam velit quisquam veniam excepturi temporibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
//                     </div>
//                 </div>
//             </div>
//             </div>

//             <div className="col-md-6 mt-4">
//             <div className="fpf-card">
//                 <img className="fpf-card-img-top" alt="featured-website" src="https://picsum.photos/200/150/?random"/>
//                 <div className="fpf-card-block">
//                     <h4 className="fpf-card-title">Zu'pa</h4>
//                     <h5 className="fpf-card-tech">Gatsby, QraphQL, React, Sass, Contentful (CMS), Netlify (Host)</h5>
//                     <div className="fpf-card-text">
//                         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam velit quisquam veniam excepturi temporibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
//                     </div>
//                 </div>
//             </div>
//             </div>
//         </div>
//         </section>
//         <div className="text-center mt-5">
//         <AniLink fade to='/portfolio'>
//         <button className="btn-text btn btn-lg btn-bordered-teal">View Portfolio</button>
//         </AniLink>
//         </div>
//     </div>