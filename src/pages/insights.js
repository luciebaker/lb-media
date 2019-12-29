import React from "react"
import Hero from "../components/utilities/Hero"
import Header from "../components/utilities/Header"
import { graphql } from 'gatsby'
import InsightsList from "../components/Insights/InsightsList"
import ContactCTA from "../components/utilities/ContactCTA"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({data}) => (
  <Layout>
    <SEO title="Insights" />
    <Hero img={data.defaultBG.childImageSharp.fluid}>
    <Header title="Insights" subtitle="For the occasional random thoughts." />
    </Hero>
    <InsightsList />
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