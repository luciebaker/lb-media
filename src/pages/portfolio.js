import React from "react"
import Layout from "../components/layout"
import Hero from "../components/utilities/Hero"
import Header from "../components/utilities/Header"
import PortfolioALL from "../components/Portfoliopages/PortfolioAll"
import ContactCTA from "../components/utilities/ContactCTA"
import SEO from "../components/seo"
import { graphql } from 'gatsby'

export default ({data}) => (
  <Layout>
    <SEO title="Portfolio" />
    <Hero img={data.defaultBG.childImageSharp.fluid}>
    <Header title="Modern Web Design & Development" subtitle="Built with Cutting-Edge Technology. Optimized for Performance." />
    </Hero>
    <PortfolioALL />
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