import React from 'react'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'


const StyledHero = ({img, className, children}) => {
    return (
        <BackgroundImage className={className} fluid={img}>
            {children}
        </BackgroundImage>
    )
}
 
export default styled(StyledHero)`
    min-height: 100vh;
    background-position: bottom center;
    display: flex;
    /* justify-content: center; */
    
`