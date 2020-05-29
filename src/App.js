import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import InputField from './input-field'
import Catalog from './catalog'
import CoinInfo from './coinInfo'
import SearchButton from './searchButton'
import AdvancedFilter from './advancedFilter'
import CoinsList from './coinsList'
import Login from "./login"
import AddPage from './addPage'
import Logo from './logo'
import DialogWindow from './dialogWindow'



class App extends Component {
    state = {
        filter: false,
        data: [],
        info: '',
        searchValue: '',
        url: 'coin',
        loginInput: '',
        passwordInput: '',
        token: null,
        login: null,
        editData: null,
        dialogWindow: false,
        deleteId:'',
        deleteCoinName: '',
        catch: true
    }


    getData = (url) => {
        fetch(url)
            .then(res => res.json())
            .then(res => this.setState({ data: res }))
    }

    filterToggle = () => {
        this.setState({ filter: !this.state.filter })
        console.log(this.state.filter)
    }
    searchClickHandler = () => {
        if (this.state.searchValue.length < 1) {
            this.getData('http://localhost:3005/coins')
        } else {
            this.getData(`http://localhost:3005/search/${this.state.searchValue}`)
            console.log('4')
        }

    }

    getAllCoins = () => {
        this.getData('http://localhost:3005/coins')
    }
    bullionFilter = () => {
        this.getData('http://localhost:3005/group1')
    }

    exclusiveFilter = () => {
        this.getData('http://localhost:3005/group2')
    }

    commemorativeFilter = () => {
        this.getData('http://localhost:3005/group3')
    }

    searchHandler = (e) => {
        this.setState({ searchValue: e.target.value })
    }

    loginHandler = (e) => {
        this.setState({ loginInput: e.target.value })
    }

    passwordHandler = (e) => {
        this.setState({ passwordInput: e.target.value })
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        const requestBody = {
            login: this.state.loginInput,
            password: this.state.passwordInput
        };
        fetch('http://localhost:3005/token', {
            method: 'POST',
            body: JSON.stringify(requestBody),
            headers: { 'Content-type': 'application/json' }
        })
            .then(res => res.json())
            .then((data) => {
                this.setState({ token: data.token, login: data.login, catch: true });
            })
            .catch(()=> this.setState({catch: false}))
    }

    deleteItem = () => {
        const requestBody = {
            token: this.state.token
        };
        const id = this.state.deleteId;
        fetch(`http://localhost:3005/coins/${id}`, {
            method: 'DELETE',
            body: JSON.stringify(requestBody),
            headers: { 'Content-type': 'application/json' }
        })
            .then(res => this.getAllCoins());
    }
    editClick = (id) => {
        const data = this.state.data.filter(item => item.id === id)
        this.setState({ editData: data[0] })

    }
    logOut = () => {
        const requestBody = {
            token: this.state.token
        };

        fetch(`http://localhost:3005/logout`, {
            method: 'DELETE',
            body: JSON.stringify(requestBody),
            headers: { 'Content-type': 'application/json' }
        })
            .then(res => this.setState({ token: null, loginInput: '', passwordInput: '' }))
    }

    dialogWindowHandler =(id, name)=>{
        this.setState({deleteCoinName: name})
        this.setState({deleteId: id})
        this.setState({dialogWindow: !this.state.dialogWindow})
    }

    render() {
        return (
            <Router>
                <DialogWindow display={this.state.dialogWindow} 
                deleteHandler={this.deleteItem} 
                onHideDialog = {this.dialogWindowHandler}
                itemName = {this.state.deleteCoinName}/>

                <div className='head-block'>
                    <div>
                        <Link to='/'>
                            <Logo />
                        </Link>
                        <InputField value={this.state.searchValue} handleChange={this.searchHandler} id={1} placeholder="Search" />
                        <Link to='/list'>
                            <SearchButton label={'Search'} click={this.searchClickHandler} />
                        </Link>
                        {/* <p onClick={this.filterToggle}>Advanced Filter</p> */}

                    </div>
                    <div>
                        {this.state.token ?
                            <>
                                <Link to='/admin'>
                                    <p className='adm-btn'>Admin Panel</p>
                                </Link>
                                <Link to='/add'>
                                    <p className='adm-btn'>Add Coin</p>
                                </Link>
                                <Link to='/'>
                                    <p className='adm-btn' onClick={this.logOut}>Log Out</p>
                                </Link>
                            </> :
                            <Link to='/login'>
                                <p className='adm-btn'>{this.state.token?'Admin Panel':'Log In'}</p>
                            </Link>
                        }
                    </div>
                </div>
                <AdvancedFilter filter={this.state.filter} />
                <Route path="/" exact>
                    <div className="catalogs-cont">
                        <Catalog header='Bullion ' img={"https://i.postimg.cc/pr92cQPx/South-Vietnamese-Dong-1.png"} link={'/group1'} />
                        <Catalog header='Exclusive ' img={"https://i.postimg.cc/50S9F9nd/ISK-2.png"} link={'/group2'} />
                        <Catalog header='Commemorative ' img={"https://i.postimg.cc/bY2cMwQz/Looney-1.png"} link={'/group3'} />
                    </div>
                </Route>
                <Route path="/list" exact>
                    <CoinsList data={this.state.data} />
                </Route>
                {this.state.token &&
                    <Route path='/admin'>
                        <CoinsList data={this.state.data}
                            deleteHandler={this.dialogWindowHandler}
                            token={this.state.token}
                            moun={this.getAllCoins}
                            editItem={this.editClick} />
                    </Route>}


                <Route path='/group1'>
                    <CoinsList moun={this.bullionFilter} data={this.state.data} />
                </Route>
                <Route path='/group2'>
                    <CoinsList moun={this.exclusiveFilter} data={this.state.data} />
                </Route>
                <Route path='/group3'>
                    <CoinsList moun={this.commemorativeFilter} data={this.state.data} />
                </Route>
                <Route path='/filtered'>
                    <CoinsList />
                </Route>
                <Route path={`/list/:id`}
                    render={({ match }) => {
                        const id = match.params;
                        return <CoinInfo id={id} />
                    }} />
                <Route path={"/login"}>
                    <Login login={this.state.loginInput}
                        password={this.state.passwordInput}
                        handleChangeL={this.loginHandler}
                        handleChangeP={this.passwordHandler}
                        submit={this.handleSubmit} 
                        catch = {this.state.catch}/>
                </Route>
                <Route path={'/add'}>
                    <AddPage token={this.state.token} />
                </Route>
                <Route path={'/edit'}>
                    <AddPage token={this.state.token} handleChange={() => console.log('aaa')} data={this.state.editData} />
                </Route>
                {this.state.token ? <Redirect to='/admin' /> : null}





            </Router>

        )
    }
}


export default App