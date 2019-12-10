import React, { Component } from 'react'
import PortfolioItem from './PortfolioItem'


export default class PortfolioList extends Component {
    state={
        AllPortfolioItems: [],
        AllPortfolioItemsSorted: []
    }

    componentDidMount(){
        this.setState({
            AllPortfolioItems:this.props.AllPortfolioItems.edges,
            AllPortfolioItemsSorted:this.props.AllPortfolioItems.edges
        })
    }
    render() {
    

        return (

            <div className="container mt-2">
            <section className="fpf-portfolios mt-5">
            <div className="fpf-center">
            {this.state.AllPortfolioItemsSorted.map(({node}) => {
                return <PortfolioItem key={node.contentful_id} folio={node} />
            })}
            </div>
            </section>
            </div>
        )
    }
}
