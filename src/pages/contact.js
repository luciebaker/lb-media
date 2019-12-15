import React from "react"
import Layout from "../components/layout"
import Header from "../components/utilities/Header"
import Box from "../components/utilities/Box"
import ContactInfo from "../components/otherpages/ContactInfo"
import ContactForm from "../components/utilities/ContactForm"

import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <Header title1="Contact" title2="LB Media"/>
    <Box textbox1="Modern Design for a Great User Experience" textbox2="Focus on Performance & Best Practice" textbox3="Cutting-Edge Technology"/>
    <ContactInfo />
    <ContactForm />
  </Layout>
)

export default ContactPage