import React from 'react'


export default function Header({title, subtitle}) {
        return (
        <div className="container-fluid">
        <h1 className="hero-title">{title}</h1>
        <p className="hero-subtitle">{subtitle}</p>
        </div>
        )
    }


