import React from 'react'

export default function featuredText({text}) {
    return (
        <div className="container text-center mt-5 mb-3">
        <h2 className="featured-text pt-4">{text}</h2>
        </div>
    )
}