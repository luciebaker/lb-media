import React from "react"
import Layout from "../components/layout"
import Header from "../components/utilities/Header"
import Box from "../components/utilities/Box"
import PortfolioALL from "../components/Portfoliopages/PortfolioAll"
import ContactCTA from "../components/utilities/ContactCTA"
import SEO from "../components/seo"

const PortfolioPage = () => (
  <Layout>
    <SEO title="Portfolio" />
    <Header title1="lb media" title2="portfolio" />
    <Box textbox1="Modern Design" textbox2="Cutting-Edge Technology" textbox3="Performance & Best Practice"/>
    <PortfolioALL />
    <ContactCTA />
  </Layout>
)

export default PortfolioPage