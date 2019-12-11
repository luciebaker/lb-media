import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/layout'
import Box from '../components/utilities/Box'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Img from "gatsby-image"

const PfTemplate = ({data}) => {
const {name, tech, featurebox1, featurebox2, featurebox3, externalUrl, githubLink, overview:{overview}, result:{result}, media} = data.pfitem
const [mainImage] = media

return (
        <Layout>
        <div className="container pf-main-image-div">
            <Img fluid={mainImage.fluid} alt="portfolio"/>
        </div>

        <div className="text-center mb-5">
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
        <button className="btn-text btn btn-lg btn-bordered-teal mr-2 ml-2 mb-2">view code</button></a>
        <a href={externalUrl} target="_blank" rel="noopener noreferrer">
        <button className="btn-text btn btn-lg btn-bordered-teal mr-2 ml-2 mb-2">view website</button></a>
        </div>

        <Box textbox1={featurebox1} textbox2={featurebox2} textbox3={featurebox3}/>

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
        <button className="btn-text btn btn-lg btn-bordered-teal ml-3">Return to Portfolio</button>
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
    featurebox1
    featurebox2
    featurebox3
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
        ...GatsbyContentfulFluid_tracedSVG
      }
    }
  }
}
`

export default PfTemplate 