import React from "react"
import Layout from "../components/layout"
import Header from "../components/utilities/Header"
import FeaturedText from "../components/utilities/featuredText"
import Info from "../components/Homepage/Info"
import Box from "../components/utilities/Box"
import FeaturedPortfolio from "../components/Homepage/FeaturedPortfolio"
import TechLogos from "../components/utilities/Techlogos"
import ContactCTA from "../components/utilities/ContactCTA"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="LB Media" />
    <Header title1="creating" title2="state of the art" title3="websites"/>
    <Box textbox1="Modern Design" textbox2="Cutting-Edge Technology" textbox3="Performance & Best Practice"/>
    <Info />
    <FeaturedText text="Future proof your web presence"/>
    <TechLogos />
    <FeaturedPortfolio/>
    <ContactCTA />
    <h3 className="text-center mt-5 mb-5">Featured Insights section to be added here very soon</h3>
  </Layout>
)

export default IndexPage
