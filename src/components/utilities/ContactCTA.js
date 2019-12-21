import React from 'react'
import FeaturedText from './featuredText'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { FaChevronCircleRight } from 'react-icons/fa'

const ContactCTA = () => {
    return (
        <div>
        <FeaturedText text="Let's build something great together!"/>
        <div className="text-center">
                <AniLink fade to='/contact'>
                <h5 className="btn-text">Get in touch <FaChevronCircleRight className="link-icon"/></h5>
                </AniLink>
                </div>
        </div>
    )
}

export default ContactCTA