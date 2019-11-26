import React from "react"
import Layout from "../components/layout"
import Header from "../components/Homepage/Header"
import FeaturedText from "../components/utilities/featuredText"
import Info from "../components/Homepage/Info"
import Box from "../components/Homepage/Box"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="LB Media" />
    <Header />
    <Box />
    <Info />
    <FeaturedText text="Future proof your web presence!"/>
    <h3 className="text-center mt-5">Featured Portfolio items to be added here very soon</h3>
    <FeaturedText text="Let's build something great together!"/>
    <h3 className="text-center mt-5 mb-5">Featured Insights section to be added here very soon</h3>
  </Layout>
)

export default IndexPage
