import React from 'react'
import Layout from "../components/layout"
import Header from "../components/utilities/Header"
import Box from "../components/utilities/Box"
import PowerPage from "../components/otherpages/PowerPage"
import ContactCTA from "../components/utilities/ContactCTA"
import SEO from "../components/seo"

const power = () => (
    <Layout>
        <SEO title="The Power of Gatsby" />
        <Header title1="The Power of" title2="Gatsby" />
        <Box textbox1="Performance & Best Practice" textbox2="Cutting-Edge Technology" textbox3="Easy to Manage and Update via Headless CMS"/>
        <PowerPage />
        <ContactCTA />
    </Layout>
  )

export default power