import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/layout'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { FaChevronCircleRight } from 'react-icons/fa'
import Img from "gatsby-image"

const PfTemplate = ({data}) => {
const {name, tech, externalUrl, githubLink, overview:{overview}, result:{result}, media} = data.pfitem
const [mainImage] = media

return (
        <Layout>
        <div className="container pf-main-image-div">
            <Img fluid={mainImage.fluid} alt="portfolio"/>
        </div>

        <div className="container">
        <div className="row justify-content-center">
        <div className="col-5 text-right">
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
        <h5 className="btn-text btn-pft">View Code <FaChevronCircleRight className="link-icon"/></h5>
        </a>
        </div>
        <div className="col-5">
        <a href={externalUrl} target="_blank" rel="noopener noreferrer">
        <h5 className="btn-text btn-pft">View Website <FaChevronCircleRight className="link-icon"/></h5>
        </a>
        </div>
        </div>
        </div>

        <div className="container">
        <div className="text-center pf-title-div">
        <h1>{name}</h1>
        </div>

        <div className="pf-div">
        <h3>Background</h3>
        {overview}
        </div>
        
        <div className="pf-div">
        <h3>Technologies & Services</h3>
        {tech}
        </div>

        <div className="pf-div pf-div-last">
        <h3>Results</h3>
        {result}
        </div>

        </div>
        <div className="text-center mb-5">
        <AniLink fade to='/portfolio'>
                <h5 className="btn-text pt-3">Return to Portfolio <FaChevronCircleRight className="link-icon"/></h5>
        </AniLink>
        </div>
        </Layout>
    )
}

export const query = graphql`
query ($slug: String!) {
  pfitem: contentfulLbPortfolio(slug: {eq: $slug}) {
    name
    tech
    externalUrl
    githubLink
    description {
      description
    }
    overview {
      overview
    }
    result {
      result
    }
    media {
      fluid {
        ...GatsbyContentfulFluid
      }
    }
  }
}
`

export default PfTemplate 