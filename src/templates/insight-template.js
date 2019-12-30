import React from 'react'
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import InsightHeader from "../components/Insights/InsightHeader"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { FaChevronCircleRight } from 'react-icons/fa'
import SEO from "../components/seo"

const Insight = ({data}) => {
const {title, subtitle, published, excerpt:{excerpt}, text:{json}} = data.post

    return (
        <Layout>
            <SEO title={title} description={excerpt} />
            <div className="container-fluid container-insight-hero">
            <InsightHeader title={title} subtitle={subtitle} date={published} />
            </div>

            <div className="container-fluid container-insight-post">
            {documentToReactComponents(json)}
            </div>
            <div className="container text-center mb-5">
            <AniLink fade to='/insights'>
                    <h5 className="btn-text pt-3">Return to Insights <FaChevronCircleRight className="link-icon"/></h5>
            </AniLink>
            
            </div>
        </Layout>
    )
}

export const query = graphql`
query getPost($slug:String!){
  post: contentfulLBblog(slug:{eq:$slug}) {
    title
    subtitle
    published(formatString:"MMMM D, YYYY")
    excerpt {
      excerpt
    }
    text {
      json
    }
  }
}
`
export default Insight