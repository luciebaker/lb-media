import React from "react"
import Layout from "../components/layout"
import Header from "../components/utilities/Header"
import Box from "../components/utilities/Box"
import ContactCTA from "../components/utilities/ContactCTA"
import SEO from "../components/seo"

const PortfolioPage = () => (
  <Layout>
    <SEO title="Portfolio" />
    <Header title1="lb media" title2="portfolio" />
    <Box textbox1="Modern Technology" textbox2="Cutting-Edge Technology" textbox3="Best Practice"/>
    <ContactCTA />
  </Layout>
)

export default PortfolioPage