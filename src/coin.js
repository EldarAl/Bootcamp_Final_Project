import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Button from './searchButton'



class Coin extends Component {
    render() {
        const { deleteHandler, editItem } = this.props


        return (
            <div className="coin-block" onClick={this.props.click}>
                <div className="coin-img">
                    <img src={this.props.avers} alt={this.props.header} />
                </div>
                <div className="coin-desc">
                    <Link to={`/list/${this.props.header}`}>
                        <p className="head">{this.props.header}</p>
                    </Link>

                    <p className="desc">{this.props.shortDescription}</p>
                </div>

                {this.props.token ?
                    <div className='coin-adm-btn'>
                        <Link to="/edit">
                            <Button label={"Edit"} click={() => editItem(this.props.id)} />
                        </Link>
                        <Button label={"Delete"} click={() => deleteHandler(this.props.id, this.props.header)} />
                    </div> : null}

            </div>
        )
    }
}


export default Coin