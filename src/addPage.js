import React, { Component } from 'react'
import Input from './input-field'
import Button from './searchButton'
import { Link } from 'react-router-dom'
// import styled from 'styled-components';


// const TextArea = styled.textarea`
// border-radius: 5px;
//   border: 1.2px solid black;
//   width: 350px;
//   height: 100px;
//   padding: 0 15px;
//   font-size: 16px;
//   margin-top: 5px;

// `

class addPage extends Component {


    state = {
        header: this.props.data ? this.props.data.header : '',
        avers: this.props.data ? this.props.data.avers : '',
        revers: this.props.data ? this.props.data.revers : '',
        description: this.props.data ? this.props.data.description : '',
        country: this.props.data ? this.props.data.country : '',
        composition: this.props.data ? this.props.data.composition : '',
        quality: this.props.data ? this.props.data.quality : '',
        denomination: this.props.data ? this.props.data.denomination : '',
        year: this.props.data ? this.props.data.year : '',
        weight: this.props.data ? this.props.data.weight : '',
        price: this.props.data ? this.props.data.price : '',
        shortDescription: this.props.data ? this.props.data.shortDescription : '',
        group: this.props.data ? this.props.data.group : '',
        id: this.props.data ? this.props.data.id : ''
    }
    headerHandler = (e) => {
        this.setState({ header: e.target.value })
    }
    aversHandler = (e) => {
        this.setState({ avers: e.target.value })
    }
    reversHandler = (e) => {
        this.setState({ revers: e.target.value })
    }
    desciptionHandler = (e) => {
        this.setState({ description: e.target.value })
    }
    countryHandler = (e) => {
        this.setState({ country: e.target.value })
    }
    compositionHandler = (e) => {
        this.setState({ composition: e.target.value })
    }
    qualityHandler = (e) => {
        this.setState({ quality: e.target.value })
    }
    denominationHandler = (e) => {
        this.setState({ denomination: e.target.value })
    }
    yearHandler = (e) => {
        this.setState({ year: e.target.value })
    }
    weightHandler = (e) => {
        this.setState({ weight: e.target.value })
    }
    priceHandler = (e) => {
        this.setState({ price: e.target.value })
    }
    shortDescHandler = (e) => {
        this.setState({ shortDescription: e.target.value })
    }
    groupHandler = (e) => {
        this.setState({ group: e.target.value })
    }
    handleSubmit = () => {
        const requestBody = {
            header: this.state.header,
            avers: this.state.avers,
            revers: this.state.revers,
            description: this.state.description,
            country: this.state.country,
            composition: this.state.composition,
            quality: this.state.quality,
            denomination: this.state.denomination,
            year: this.state.year,
            weight: this.state.weight,
            price: this.state.price,
            shortDescription: this.state.shortDescription,
            group: this.state.group,
            token: this.props.token
        };
        fetch('http://localhost:3005/coins', {
            method: 'POST',
            body: JSON.stringify(requestBody),
            headers: { 'Content-type': 'application/json' }
        })
    }

    editSubmit = () => {
        const requestBody = {
            header: this.state.header,
            avers: this.state.avers,
            revers: this.state.revers,
            description: this.state.description,
            country: this.state.country,
            composition: this.state.composition,
            quality: this.state.quality,
            denomination: this.state.denomination,
            year: this.state.year,
            weight: this.state.weight,
            price: this.state.price,
            shortDescription: this.state.shortDescription,
            group: this.state.group,
            token: this.props.token,
            id: this.state.id
        };
        fetch('http://localhost:3005/coins', {
            method: 'PUT',
            body: JSON.stringify(requestBody),
            headers: { 'Content-type': 'application/json' }
        })
    }

    render() {

        return (
            <div className={'add-page-box'}>
                <div>
                    <Input label={"Coin name"} id={2} value={this.state.header} handleChange={this.headerHandler} />
                    <Input label={"Face value"} id={3} value={this.state.denomination} handleChange={this.denominationHandler} />
                    <Input label={"Year of issue"} id={4} value={this.state.year} handleChange={this.yearHandler} />
                    <Input label={"Price"} id={5} value={this.state.price} handleChange={this.priceHandler} />
                    <Input label={"Country"} id={6} value={this.state.country} handleChange={this.countryHandler} />
                    <Input label={"Metal"} id={7} value={this.state.composition} handleChange={this.compositionHandler} />
                </div>
                <div>
                    <Input label={"Short description"} id={8} value={this.state.shortDescription} handleChange={this.shortDescHandler} />
                    <Input label={"Long description"} id={9} value={this.state.description} handleChange={this.desciptionHandler} />
                    <Input label={"Quality of the coin"} id={10} value={this.state.quality} handleChange={this.qualityHandler} />
                    <Input label={"Weight"} id={11} value={this.state.weight} handleChange={this.weightHandler} />
                    <Input label={"Link to obverse image"} id={12} value={this.state.avers} handleChange={this.aversHandler} />
                    <Input label={"Link to reverse image"} id={13} value={this.state.revers} handleChange={this.reversHandler} />
                </div>
                <div>
                    <div>
                        <Input label={"Group"} id={14} value={this.state.group} handleChange={this.groupHandler} />
                        <div className="add-page-btn-block">
                            <Link to="/admin">
                                <Button label={"Save"} click={this.props.data ? this.editSubmit : this.handleSubmit} />
                            </Link>

                            <Link to="/admin">
                                <Button label={"Cancel"} />
                            </Link>
                        </div>
                    </div>
                </div>

            </div>



        )
    }
}

export default addPage


