import React from 'react'

export default function featuredText({text}) {
    return (
        <div className="container text-center mt-5 mb-3">
        <h1 className="featured-text pt-3 pb-3">{text}</h1>
        </div>
    )
}