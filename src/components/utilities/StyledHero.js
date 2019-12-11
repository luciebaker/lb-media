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
    min-height: 75vh;
    background-position: center center;
    margin-top: 3rem;
    background-size: 65%;
    display: flex;
    justify-content: center;
    
`