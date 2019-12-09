import React from 'react'
import {StaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'


export default function Techlogos() {
    return (
        <StaticQuery query={graphql`
        {
	gatsbylogo:file(relativePath:{eq:"TechLogos/gatsby.png"}) {
    childImageSharp {
      fixed(height:35){
        ...GatsbyImageSharpFixed
      }
    }
  }
  graphqllogo:file(relativePath:{eq:"TechLogos/graphql.png"}) {
    childImageSharp {
      fixed(height:35){
        ...GatsbyImageSharpFixed
      }
    }
  }
  reactlogo:file(relativePath:{eq:"TechLogos/react.png"}) {
    childImageSharp {
      fixed(height:35){
        ...GatsbyImageSharpFixed
      }
    }
  }
  contentfullogo:file(relativePath:{eq:"TechLogos/contentful.png"}) {
    childImageSharp {
      fixed(height:33){
        ...GatsbyImageSharpFixed
      }
    }
  }
  netlifylogo:file(relativePath:{eq:"TechLogos/netlify.png"}) {
    childImageSharp {
      fixed(height:33){
        ...GatsbyImageSharpFixed
      }
    }
  }
}
        `} 
        render={ data => {
            const gatsbylogo = data.gatsbylogo.childImageSharp.fixed
            const graphqllogo = data.graphqllogo.childImageSharp.fixed
            const reactlogo = data.reactlogo.childImageSharp.fixed
            const contentfullogo = data.contentfullogo.childImageSharp.fixed
            const netlifylogo = data.netlifylogo.childImageSharp.fixed
            return (
                <div className="container text-center">

                <a href="https://www.gatsbyjs.org" target="_blank" rel="noopener noreferrer">
                <Img className="techlogo" alt="Gatsby Logo"fixed={gatsbylogo}/></a>

                <a href="https://graphql.org" target="_blank" rel="noopener noreferrer">
                <Img className="techlogo" alt="Graph QL Logo" fixed={graphqllogo}/></a>

                <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                <Img className="techlogo" alt="React JS Logo" fixed={reactlogo}/></a>

                <a href="https://www.contentful.com" target="_blank" rel="noopener noreferrer">
                <Img className="techlogo" alt="Contentful Logo" fixed={contentfullogo}/></a>

                <a href="https://www.netlify.com" target="_blank" rel="noopener noreferrer">
                <Img className="techlogo" alt="Netlify Logo" fixed={netlifylogo}/></a>

                </div>
            )
        }
    }/>
    )
}
