import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { FaChevronCircleRight } from 'react-icons/fa'

const InsightsCard = ({blog}) => {
    const {slug, title, subtitle, published, excerpt:{excerpt}} = blog
    return (
        <div className="container insight-list-container">
           <h3>{title}</h3>
           <h5>{subtitle}</h5>
           <h6>{published}</h6>
           <p>{excerpt}</p>
           <AniLink fade className="text-right" to={`/insights/${slug}`}>
                <h6 className="insight-list-btn-text pr-3">Read more <FaChevronCircleRight className="insight-list-link-icon"/></h6>
            </AniLink>
        </div>
    )
}

export default InsightsCard