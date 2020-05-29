import React, { Component } from 'react'
import Input from './input-field'


class AdvancedFilter extends Component {
    render() {

        return (
            <div className={"filter-box" + (this.props.filter ? ' view-filt' : '' )}>
                <div className="select-box">
                    <select className="select-s">
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                    </select>
                    <select className="select-s">
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                    </select>
                    <select className="select-s">
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                    </select>
                </div>

                <div>
                    <div>
                        <Input label='from'  handleChange/>
                        <Input label='to'  handleChange/>
                    </div>
                    <div>
                        <Input label='from'  handleChange/>
                        <Input label='to'  handleChange/>
                    </div>

                </div>
            </div>
        )
    }
}


export default AdvancedFilter