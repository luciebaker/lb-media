import React from "react"
import { FaGithub } from 'react-icons/fa'
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 className="text-center">Hello there!</h1>
    <h1 className="text-center">Hello there!</h1>
    <h3 className="text-center">You've found our website but there's nothing here yet... the sadness</h3>
    <h1 className="text-center">It's ok.... We're building an awesome website</h1>
    <h3 className="text-center md-10">Visit again soon  <FaGithub />.</h3>

  </Layout>
)

export default IndexPage
