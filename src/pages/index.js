import React from "react"
import Layout from "../components/layout"
import StyledHero from "../components/utilities/StyledHero"
import HomePageHeader from "../components/Homepage/HomepageHeader"
import FeaturedText from "../components/utilities/featuredText"
import Info from "../components/Homepage/Info"
import FeaturedPortfolio from "../components/Homepage/FeaturedPortfolio"
import TechLogos from "../components/utilities/Techlogos"
import ContactCTA from "../components/utilities/ContactCTA"
import SEO from "../components/seo"
import { graphql } from 'gatsby'

export default ({data}) => (
  <Layout>
    <SEO title="LB Media" />
    <StyledHero img={data.defaultBG.childImageSharp.fluid}>
    <HomePageHeader />
    </StyledHero>
    <Info />
    <FeaturedPortfolio/>
    <FeaturedText text="Future proof your web presence"/>
    <TechLogos />
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


