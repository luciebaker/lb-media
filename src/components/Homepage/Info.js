import React, { Component } from 'react'
import FeaturedText from '../utilities/featuredText'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { FaChevronCircleRight } from 'react-icons/fa'


export default class Info extends Component {
    render() {
        return (
            <div className="container-fluid">
                <FeaturedText text="Don't get left behind using last decade's technology!"/>
                
                <div className="row justify-content-center">
                    <div className="col-md-5 mt-2 info-container-left">
                        <h4>Performance, Reliability, Flexibility, Security, Easy Content Management and Affordability are just a few of the reasons why a website built with Gatsby's cutting-edge technology is a great option for your next project.</h4>
                        
                    </div>
                    <div className="col-md-5 mt-2 info-container-right">
                        <p> It’s 2020 and you deserve the best technology available; technology that will adapt to your needs as your web presence grows. Choosing the technology that will power your website or web application is an important decision. There are several options available but few, if any, will compare to the power of Gatsby.</p>
                    </div>
                </div>
                <div className="text-center mt-3">
                <AniLink fade to='/power'>
                <h5 className="btn-text">Discover the Power of Gatsby <FaChevronCircleRight className="link-icon"/></h5>
                </AniLink>
                </div>
            </div>
        )
    }
}
