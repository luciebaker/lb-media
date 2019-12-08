import React from 'react'
import FeaturedText from './featuredText'
import AniLink from "gatsby-plugin-transition-link/AniLink";

const ContactCTA = () => {
    return (
        <div>
        <FeaturedText text="Let's build something great together!"/>
        <div className="text-center">
                <AniLink fade to='/contact'>
                <button className="btn-text btn btn-lg btn-bordered-teal mb-5">Get in touch</button>
                </AniLink>
                </div>
        </div>
    )
}

export default ContactCTA