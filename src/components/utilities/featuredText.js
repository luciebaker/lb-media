import React from 'react'

export default function featuredText({text}) {
    return (
        <div className="row">
        <div className="col text-center mt-5 mb-3">
        <h2 className="featured-text pt-4">{text}</h2>
        </div>
        </div>
    )
}