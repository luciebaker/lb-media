import React from "react"
import Hero from "../components/utilities/Hero"
import Header from "../components/utilities/Header"
import Layout from "../components/layout"
import ContactCTA from "../components/utilities/ContactCTA"
import SEO from "../components/seo"
import { graphql } from 'gatsby'

export default ({data}) => (
  <Layout>
    <SEO title="About LB Media" />
    <Hero img={data.defaultBG.childImageSharp.fluid}>
    <Header title="About LB Media" subtitle="Leveraging the power of the latest web technologies to give you the edge." />
    </Hero>
    
    <h3 className="temp-text text-center mb-5">Nothing here yet... but I'm working on it!</h3>
    <ContactCTA />
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