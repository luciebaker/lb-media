import React from 'react'

export default function Box({textbox1, textbox2, textbox3}) {
        return (
            <div className="container-fluid card-container-bg">
                <div className="d-flex card-container-align p-2">
                    <div className="card card-bg">
                        <h3 className="card-title my-auto text-center text-white">{textbox1}</h3>
                    </div>
                    <div className="card card-bg">
                        <h3 className="card-title my-auto text-center text-white">{textbox2}</h3>
                    </div>
                    <div className="card card-bg card-last">
                        <h3 className="card-title my-auto text-center text-white">{textbox3}</h3>
                    </div>
</div>
</div>
        )
    }
