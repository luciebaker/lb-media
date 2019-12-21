import React from 'react'
import Layout from "../components/layout"
import Hero from "../components/utilities/Hero"
import Header from "../components/utilities/Header"
import PowerPage from "../components/otherpages/PowerPage"
import ContactCTA from "../components/utilities/ContactCTA"
import SEO from "../components/seo"
import { graphql } from 'gatsby'

export default ({data}) => (
    <Layout>
        <SEO title="The Power of Gatsby" />
        <Hero img={data.defaultBG.childImageSharp.fluid}>
        <Header title="The Power of Gatsby" subtitle="Blazing Fast Modern Technology." />
        </Hero>
        <PowerPage />
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