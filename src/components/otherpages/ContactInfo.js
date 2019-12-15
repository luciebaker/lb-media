import React, { Component } from 'react'
import FeaturedText from '../utilities/featuredText'

export default class ContactInfo extends Component {
    render() {
        return (
            <div className="container">
                <FeaturedText text="Let's talk about your next website or web application"/>
                <p>Whether you have an idea for a website or web application and need support with the design and implementation or you already have a website or web application but you are not happy with it? Let me help!</p>
            </div>
        )
    }
}
