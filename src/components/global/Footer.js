import React, { Component } from 'react'
import logo from '../../images/LBMedia-logo.svg'
import AniLink from "gatsby-plugin-transition-link/AniLink";

import FooterIcons from './FooterIcons'


export default class Footer extends Component {
    render() {
        return (
            
        <div className="container-fluid">
                
            <div className="row white-bg footer">
                    
                    <div className="col-sm col-footer-right text-center">

                    <AniLink fade to='/'>
                    <img className="footer-logo" src={logo} alt="LB Media Logo"/>
                    </AniLink>
                    </div>

                    <div className="col-sm col-footer pt-4 text-center">
                    <h5>Discover</h5>
                    <AniLink fade to='/power'>
                    <h5><b>The Power of Gatsby</b></h5>
                    </AniLink>
                    <h5>for Your Next Project</h5>
                    </div>
                    
                    <div className="col-sm col-footer text-center">
                    <FooterIcons />
                    </div>

            </div>

                <div className="row white-bg copyright-border">
                <div className="col-10 mx-auto col-md-6 mt-3 text-center">
                <p> &copy; {new Date().getFullYear().toString()} Lucie B | LB Media </p>
                </div>
                </div>
        </div>
        )
    }
}
