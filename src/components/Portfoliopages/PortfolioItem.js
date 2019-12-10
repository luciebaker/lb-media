import React from 'react'
import Image from 'gatsby-image'
import AniLink from "gatsby-plugin-transition-link/AniLink"


const PortfolioItem = ({folio}) => {
    const {name, tech, slug, description:{description}, media } = folio
    let fpfImage = media[0].fluid
        

    return (
        <article className="fpfitem">
        <div className="fpfitem-img-container">
        <Image fluid={fpfImage} className="fpfitem-img" alt="featured portfolio item"/>
        <AniLink fade className="fpfitem-link" to={`/portfolio/${slug}`}>View Details</AniLink>
        </div>
        <div className="fpfitem-footer">
        <h3>{name}</h3>
        <h6>{tech}</h6>
        <p>{description}</p>
        </div>
        </article>
    )
}

export default PortfolioItem
