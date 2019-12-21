import React from 'react'
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"


const HomepageHeader = () => {
    const { displayImage } = useStaticQuery(
        graphql`
        query {
            displayImage: file(relativePath: {eq: "capriccio-mockup.png"}) {
                childImageSharp {
                    fluid(maxWidth: 800) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `
    )

    return (
        <div className="container-fluid">
        <div className="row home-header-row justify-content-center">
                    <div className="col-md-5 mt-2">
                    <h1 className="home-header-title">Modern</h1> 
                    <h1 className="home-header-title2">Web Design &</h1>
                    <h1 className="home-header-title2">Development</h1>  
                    <p className="home-header-text_one">Built with Cutting-Edge Technology.</p> 
                    <p className="home-header-text_two">Optimized for Performance.</p>  
                    </div>
                    <div className="col-md-7 mt-2">
                    <Img className="home-header-image" fluid={displayImage.childImageSharp.fluid} alt="display" />
                    </div>
                </div>
        </div>
    )
}


export default HomepageHeader