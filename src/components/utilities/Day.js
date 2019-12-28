import React from 'react'


export default function Header({title, date, text}) {
        return (
        <div className="container day-container">
        <h3>{title}</h3>
        <h6>{date}</h6>
        <p>{text}</p>
        </div>
        )
    }
