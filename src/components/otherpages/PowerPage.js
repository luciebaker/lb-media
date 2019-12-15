import React, { Component } from 'react'

export default class PowerPage extends Component {
    render() {
        return (
            <div className="container-fluid  mt-5">
                <div className="row justify-content-center">
                    <div className="col-sm-10 power-intro">
                        <p>From a developer view point, my aim is to build websites and web applications that meet clients’ expectations, not just for today but for the foreseeable future. With technology advancing at a rapid pace, it is important to stay current, and make use of the most up-to-date web development tools available. One of these, state of the art, cutting-edge technologies is Gatsby,  an open-source static site generator incorporating React and GraphQL. It is the most modern way to build reliable, lightning-fast websites that are scalable and will adapt to your needs as you web presence grows.</p>
                    </div>
                </div>
            
                <div className="row justify-content-center">
                    <div className="col-md-5 mt-2 power-feature-container">
                        <h3 className="power-title">Performance</h3>
                        <p>Websites built with Gatsby aren’t just fast, they are lightning-fast! This translates into a <u>better user experience</u>, <u>greater lead conversion</u>, and <u>better SEO ranking</u>. By loading only the most critical content and pre-fetching all other content, pages load in milliseconds rather than seconds; so quickly, it seems instantaneous! This feature is especially important since Google released a new ranking algorithm in July 2018.</p>
                    </div>
                    <div className="col-md-5 mt-2 power-feature-container">
                        <h3 className="power-title">Reliability</h3>
                        <p>Gatsby leverages the power of the latest web technologies including React, GraphQL, modern JavaScript, and more.  All the power and conveniences of these technologies contribute to your website’s performance and reliability. Linked with a great headless content management system (CMS) and Content Delivery Network (CDN), your site can grow with the peace of mind that it is not at risk of crashing if your content goes viral.</p>
                    </div>
                </div>

                <div className="row justify-content-center">
                <div className="col-md-5 mt-2 power-feature-container">
                    <h3 className="power-title">Easy Management</h3>
                    <p>With Gatsby, your data is stored on a headless CMS, rather than a traditional database. Not only does this contribute to your website’s performance and security, but it also makes it very easy for you to update or add to your data as required. This website, for example, uses Contentful (CMS) to add portfolio items and blog posts, that are automatically deployed via web hooks and live for the world to see, within minutes.</p>
                </div>
                <div className="col-md-5 mt-2 power-feature-container">
                    <h3 className="power-title">Flexibility & Scalability</h3>
                    <p>Contentful is one of the CMS I frequently use and recommend, but there are several others and your content can come from multiple places. This serverless architecture contributes to your site’s reliability and makes it extremely flexible and scalable. Not only will your site be great today but it will be ready for growth. Implementing new features to your site, as your usage or user base extends, can be done without hassle.</p>
                </div>
                </div>

                <div className="row justify-content-center">
                <div className="col-md-5 mt-2 power-feature-container">
                    <h3 className="power-title">Affordability</h3>
                    <p>While Gatsby is technology used by some of the most popular brands, it is scalable and very affordable. Beyond the costs of a domain name and development, the costs of hosting your data on a headless CMS, such as Contentful, and hosting your site on a service such as Netlify, are initially free. Since Gatsby websites are quicker to develop than traditional websites, the costs related to development are also considerably lower.</p>
                </div>
                <div className="col-md-5 mt-2 power-feature-container">
                    <h3 className="power-title">Security</h3>
                    <p>With over 70% of the most popular WordPress installations open to vulnerabilities, security is a costly issue. By using a serverless architecture, where front-end and CMS are decoupled and server-side processes are run by APIs, Gatsby solves this problem. Because there are no direct connections to a database, dependencies, user data or other sensitive information, your website is like a fortress!</p>
                </div>
                </div>
            </div>
        )
    }
}



