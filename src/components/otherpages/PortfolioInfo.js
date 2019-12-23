import React, { Component } from 'react'


export default class PortfolioInfo extends Component {
    render() {
        return (
            <div className="container-fluid mt-5">
                
            <div className="row justify-content-center mb-5">
            <div className="col-md-5 mt-2 info-container-left">
                <h4>From a developer view point, my aim is to build websites and web applications that meet clients’ expectations, not just today but for the foreseeable future. That's why I work with Gatsby's cutting-edge technology to build sites that are highly performant and will adapt to your needs as you web presence grows.</h4>
            </div>
            <div className="col-md-5 mt-2 info-container-right">
                <p>A visually appealing User Interface (UI) and a satisfying User Experience (UX) are essential to your site’s success. The technology that powers your site impacts both UI and UX. It also impacts performance, accessibility, best-practice and SEO; the primary factors to determine your site’s ranking. This is why Gatsby’s cutting-edge technology, renown for producing highly performant websites and web applications, is your best choice.</p>
            </div>
        </div>
            </div>
        )
    }
}
