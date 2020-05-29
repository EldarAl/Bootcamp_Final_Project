import React, { Component } from 'react'


class InputField extends Component{
    render(){
        const {handleChange, label, value, id, placeholder} = this.props
        return(
            <>
            <label htmlFor={id} className='label-w'>{label}</label>
            <input type={this.props.type? this.props.type : "text"} id={id} className="search-bar" value = {value} onChange={(e)=>handleChange(e)} placeholder={placeholder}/>
            </>
        )
    }
}


export default InputField