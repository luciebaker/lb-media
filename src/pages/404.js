import React from "react"
import FeaturedText from "../components/utilities/featuredText"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="container pt-5 pb-5 text-center">
    <FeaturedText text="You just found a little corner of the web that doesn't exist... the sadness" />
    <p>Don't worry... Just use the Navigation at the top of your screen to find your way back.</p>
    </div>
  </Layout>
)

export default NotFoundPage
