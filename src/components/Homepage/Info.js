import React, { Component } from 'react'
import FeaturedText from '../utilities/featuredText'
import AniLink from "gatsby-plugin-transition-link/AniLink"


export default class Info extends Component {
    render() {
        return (
            <div className="container">
                <FeaturedText text="Don't get left behind by using last decade's technology!"/>
                <p className="mb-4">It’s 2020 and you deserve a website built with the best technology available. Whether you are an individual wanting to start a simple blog, a small business seeking to establish a web presence, increase brand awareness, generate leads, sell products, or a combination of several of these, you deserve the best. <b className="text-bold">Performance</b>, <b className="text-bold">Reliability</b>, <b className="text-bold">Flexibility</b>, <b className="text-bold">Security</b>, <b className="text-bold">Easy Content Management</b> and <b className="text-bold">Affordability</b> are just a few of the reasons why Gatsby is a great option for your next website. 
                </p>
                <div className="text-center">
                <AniLink fade to='/power'>
                <button className="btn-text btn btn-lg btn-bordered-teal">Read More</button>
                </AniLink>
                </div>
            </div>
        )
    }
}
