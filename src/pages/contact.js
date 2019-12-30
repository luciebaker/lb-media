import React from "react"
import Layout from "../components/layout"
import Hero from "../components/utilities/Hero"
import Header from "../components/utilities/Header"
import ContactInfo from "../components/otherpages/ContactInfo"
import ContactForm from "../components/utilities/ContactForm"
import SEO from "../components/seo"
import { graphql } from 'gatsby'

export default ({data}) => (
  <Layout>
    <SEO title="Contact" description="Let's build something great together! Get in touch."/>
    <Hero img={data.defaultBG.childImageSharp.fluid}>
    <Header title="Contact LB Media" subtitle="Let's talk about your next website." />
    </Hero>
    <ContactInfo />
    <ContactForm />
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