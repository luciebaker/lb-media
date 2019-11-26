import React, { Component } from 'react'
import FeaturedText from '../utilities/featuredText'
import {Link} from 'gatsby'

export default class Info extends Component {
    render() {
        return (
            <div className="container">
                <FeaturedText text="Info section title"/>
                <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <div className="text-center">
                <Link to='/about'>
                <button className="btn-text btn btn-lg btn-bordered-teal">Read More</button>
                </Link>
                </div>
            </div>
        )
    }
}
