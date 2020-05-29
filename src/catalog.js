import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Catalog extends Component {
    // componentDidMount=()=>{
    // const {filter} = this.props 
    //  filter();
    // }
    render() {
        

        return (

            <div className="catalog-cont">
                <Link to={this.props.link}><h2>{this.props.header}</h2></Link>
                <img src={this.props.img} alt={this.props.header} />
            </div>

        )
    }
}

export default Catalog


