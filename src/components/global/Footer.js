import React, { Component } from 'react'
import logo from '../../images/LBMedia-logo.svg'
import { FaGithub } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaEnvelope } from 'react-icons/fa'


export default class Footer extends Component {
    render() {
        return (
            
            <div className="container-fluid">
                <div className="row white-bg footer">
                    <div className="col-sm col-footer-right text-center">
                    <img className="footer-logo" src={logo} alt="LB Media Logo"/>
                    </div>
                    <div className="col-sm col-footer text-center">col-sm</div>
                    <div className="col-sm col-footer text-center">col-sm</div>
                </div>
                <div className="row white-bg copyright-border">
                <div className="col-10 mx-auto col-md-6 text-center">
                <p> &copy; {new Date().getFullYear().toString()} Lucie B | LB Media </p>
                </div>
                </div>
            </div>
        )
    }
}
