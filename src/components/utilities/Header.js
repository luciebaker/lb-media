import React from 'react'

export default function Header({title1, title2, title3}) {
        return (
        <div className="container-fluid container-header">
        <h1 className='header-title'>{title1}</h1> 
        <h1 className='header-title-highlight'>{title2}</h1>
        <h1 className='header-subtitle'>{title3}</h1>
        </div>
        )
    }


