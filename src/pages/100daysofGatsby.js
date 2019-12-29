import React from "react"
import Layout from "../components/layout"
import Hero from "../components/utilities/Hero"
import DaysHeader from "../components/otherpages/100daysHeader"
import DaysInfo from "../components/otherpages/100daysInfo"
import Day from "../components/utilities/Day"
import SEO from "../components/seo"
import { FaTwitter } from 'react-icons/fa'
import { graphql } from 'gatsby'

export default ({data}) => (
  <Layout>
    <SEO title="100 Days of Gatsby" />
    <Hero img={data.defaultBG.childImageSharp.fluid}>
    <DaysHeader title="#100 Days of Gatsby" subtitle="Taking on the Challenge!" />
    </Hero>
    <DaysInfo />
    
    <Day title="DAY 1: Let the Challenge Begin!" date="January 1, 2020" 
    text="Stay posted to find out what happens on day 1 and the 99 days to follow." />
    <Day title="DAY 2:" date="January 2, 2020" 
    text="Stay posted to find out what happens on day 2 and the 98 days to follow." />
    <Day title="DAY 3: " date="January 3, 2020" 
    text="Stay posted to find out what happens on day 3 and the 97 days to follow." />
    <div className="container text-center mt-5 mb-3">
        <h1 className="day-featured-text pt-2 pb-3">For quick daily updates, follow me on  <a href="https://twitter.com/LBMedia7" target="_blank" rel="noopener noreferrer"><FaTwitter className="day-icon" /></a> </h1>
    </div>
    </Layout>
)

export const query = graphql`
query {
  defaultBG: file(relativePath: {eq: "HeroBG.jpg"}) {
    childImageSharp {
      fluid(quality:90, maxWidth: 4160) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`