import React from 'react'


export default function Header({title, subtitle, date}) {
        return (
        <div className="container-fluid">
        <h1 className="insight-title">{title}</h1>
        <h3 className="insight-subtitle">{subtitle}</h3>
        <p className="insight-date">{date}</p>
        </div>
        )
    }