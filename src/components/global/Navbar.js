import React, { Component } from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import logo from '../../images/LBMedia-logo.png'



export default class Navbar extends Component {
    state = {
        navbarOpen: false,
        css: "collapse navbar-collapse",
        links: [
            {
                id: 1,
                path: '/',
                text: 'home'
                },
            {
                id: 2,
                path: '/about/',
                text: 'about'
                },
            {
                id: 3,
                path: '/portfolio/',
                text: 'portfolio'
                },
            {
                id: 4,
                path: '/100daysofGatsby/',
                text: '#100Days'
                },
            {
                id: 5,
                path: '/contact/',
                text: 'contact'
                }   
        ]
    }

    navbarHandler = () => {
        this.state.navbarOpen
        ? this.setState({
            navbarOpen: false,
            css: "collapse navbar-collapse"
            })
        : this.setState({
            navbarOpen: true,
            css: "collapse navbar-collapse show"
            });
    };

    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark fixed-top shrink">
            <AniLink fade to='/' className="navbar-brand">
            <img className="navbar-logo" src={logo} alt="LB Media Logo"/>
            </AniLink>
            <button className="navbar-toggler" type="button" onClick={this.navbarHandler}>
            <span className="navbar-toggler-icon" />
            </button>
            <div className={this.state.css}>
            <ul className="navbar-nav ml-auto">
            {this.state.links.map(link => {
                return (
                    <li key={link.id} className="nav-item">
                    <AniLink to={link.path} className="nav-link text-uppercase">
                    {link.text}
                    </AniLink>
                    </li>
                )     
            })}
            </ul>
            </div>
            </nav>
        )
    }
}
