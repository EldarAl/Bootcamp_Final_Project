import React, { Component } from 'react'
import Button from './searchButton'
import Input from './input-field'




class Login extends Component{
    render(){
    
        return(
        <div className='login-block'>
         <div className="login-cnt">
             <div className='login-inp'>
            <Input label={"Login"} value = {this.props.login} handleChange = {this.props.handleChangeL}/>
            <Input label={"Password"} value = {this.props.password} handleChange = {this.props.handleChangeP} type={'password'}/>
            {this.props.catch? null :<p>Логин или пароль введены не корректно</p>}
            </div>
            <Button label={"Sign in"} click = {this.props.submit}/>
         </div>
         </div>
        )
    }
}


export default Login