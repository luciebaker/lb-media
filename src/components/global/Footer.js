import React, { Component } from 'react'
import logo from '../../images/LBMedia-logo.svg'
import {Link} from 'gatsby'
import FooterIcons from './FooterIcons'
// import { FaGithub } from 'react-icons/fa'
// import { FaTwitter } from 'react-icons/fa'
// import { FaEnvelope } from 'react-icons/fa'


export default class Footer extends Component {
    render() {
        return (
            
        <div className="container-fluid">
                
            <div className="row white-bg footer">
                    
                    <div className="col-sm col-footer-right text-center">

                    <Link to='/'>
                    <img className="footer-logo" src={logo} alt="LB Media Logo"/>
                    </Link>
                    </div>

                    <div className="col-sm col-footer pt-5 text-center">
                    <h4>Let's talk about your next project</h4>
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
