import React, { Component } from "react";
import styled from 'styled-components';

const Block = styled.div`
    margin: 0 auto;
    // margin-top:150px;
    border: 1px solid black;
    border-radius: 10px;
    width:25%;
    height: 200px;
    background-color: white;
    padding: 20px 40px;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    position:fixed;
    left: 35%;
    top: 35%;

`

const Button = styled.button`
    padding: 15px 30px;
    background-color: #833AE0;
    border-radius: 5px;
    border: none;
    color: white;
    width: 150px;
    font-size: 18px
`
const ButtonDiv = styled.div`
    width:100%;
    display:flex;
    justify-content: space-between;
    align-self: flex-end;
    
`
const Text = styled.span`
    align-self: center;
    margin-top: 50px;
    font-size: 20px;
    font-weight: 500;
 `
class DialogWindow extends Component{
    okClickHandler=()=>{
        this.props.deleteHandler();
        this.props.onHideDialog();
    }
    cancelClickHandler=()=>{
        this.props.onHideDialog();
    }
    
    render(){
        const {display, itemName}=this.props;

        return(
        <>
        {display? 
        <div className="modal-box">
        <Block>           
            <Text>Вы уверены, что хотите удалить монету <span className='modalword'>"{itemName}"</span> из коллекции?</Text>
        <ButtonDiv>
            <Button onClick={this.okClickHandler}>Ok</Button>
            <Button onClick={this.cancelClickHandler}>Cancel</Button>
        </ButtonDiv>
        </Block>
        </div>: null}   
        </>      
           
        )
    }
}


export default DialogWindow;