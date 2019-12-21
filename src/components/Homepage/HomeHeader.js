import React from 'react'
import Image from '../../images/capriccio-mockup.png'

const HomeHeader = () => {
    return (
        <div className="container-fluid">
        <div className="row home-header-row justify-content-center">
                    <div className="col-md-5 mt-2">
                    <h1 className="home-header-title">Modern Web Design & Development</h1> 
                    <p className="home-header-text_one">Built with Cutting-Edge Technology.</p> 
                    <p className="home-header-text_two">Optimized for Performance.</p>  
                    </div>
                    <div className="col-md-7 mt-2">
                    <img className="home-header-image" src={Image} alt="capriccio"/>
                    </div>
                </div>
        </div>
    )
}

export default HomeHeader

