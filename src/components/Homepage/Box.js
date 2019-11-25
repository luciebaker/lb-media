import React, { Component } from 'react'

export default class Box extends Component {
    render() {
        return (
            <div className="container-fluid card-container-bg">
                <div className="d-flex justify-content-end p-2">
                    <div className="card card-bg">
                        <h3 className="card-title my-auto text-center text-white">Modern Design</h3>
                    </div>
                    <div className="card card-bg">
                        <h3 className="card-title my-auto text-center text-white">Cutting-Edge Technology</h3>
                    </div>
                    <div className="card card-bg">
                        <h3 className="card-title my-auto text-center text-white">Best Practice</h3>
                    </div>
</div>
</div>
        )
    }
}
