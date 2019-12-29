import React from 'react'
import InsightsCard from "./InsightsCard"
import { useStaticQuery, graphql } from 'gatsby'

const getPosts = graphql`
query {
  posts: allContentfulLBblog(sort: {fields:published,order:DESC}) {
    edges {
      node {
        title
        subtitle
        published(formatString: "MMMM D, YYYY")
        slug
        id: contentful_id
        excerpt {
          excerpt
        }
      }
    }
  }
}
`

const InsightsList = () => {
    const {posts} = useStaticQuery(getPosts)
    
    return (
        <div className="container mt-5">
        <div>
        {posts.edges.map(({node}) => {
            return <InsightsCard key={node.id} blog={node} />
        })}
        </div>
        </div>
    )
}

export default InsightsList