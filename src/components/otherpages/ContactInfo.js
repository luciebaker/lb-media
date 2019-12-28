import React, { Component } from 'react'


export default class PortfolioInfo extends Component {
    render() {
        return (
            <div className="container-fluid mt-5">
                
            <div className="row justify-content-center mb-5">
            <div className="col-md-5 mt-2 info-container-left">
                <h4>From a developer view point, my aim is to build quality websites and applications that will meet your needs and expectations, not just today but for the foreseeable future. That's why I work with Gatsby's cutting-edge technology to build sites that are highly performant.</h4>
            </div>
            <div className="col-md-5 mt-2 info-container-right">
                <p>Whether you have an idea for a website or web application and need support with the design and implementation or you already have a website or web application but you are not happy with it? Feel free to reach out with any questions. I’m always open to discussing new projects, interesting ideas and opportunities, no matter how big or small.</p>
            </div>
        </div>
            </div>
        )
    }
}
