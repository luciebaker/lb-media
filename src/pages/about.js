import React from "react"
import Header from "../components/utilities/Header"
import Box from "../components/utilities/Box"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About LB Media" />
    <Header title1="About" title2="LB Media" />
    <Box textbox1="Modern Design for a Great User Experience" textbox2="Focus on Performance & Best Practice" textbox3="Cutting-Edge Technology"/>
    <h3 className="temp-text text-center mb-5">Nothing here yet... but we're working on it!</h3>
  </Layout>
)

export default AboutPage