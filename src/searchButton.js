import React, { Component } from 'react'


class searchButton extends Component{
    render(){
        return(
            <>
            <button className="search-btn" onClick={this.props.click}>{this.props.label}</button>
            </>
        )
    }
}


export default searchButton