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
                        <h4>Performance, Reliability, Flexibility, Security, Easy Content Management and Affordability are just a few of the reasons why  a website buit with Gatsby's cutting-edge technology is a great option for your next project.</h4>
                        
                    </div>
                    <div className="col-md-5 mt-2 info-container-right">
                        <p>It’s 2020 and you deserve a website built with the best technology available. Whether you are an individual wanting to start a simple blog, a small business seeking to establish a web presence, increase brand awareness, generate leads, sell products, or a combination of several of these, you deserve the best.</p>
                        
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
