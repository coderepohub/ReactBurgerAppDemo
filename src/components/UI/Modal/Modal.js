import React from 'react'
import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';
import Aux from '../../../hoc/AuxControl';
const modal = (props) =>(
    <Aux>
        <Backdrop show={props.showing} clicked ={props.closeModal}/>
    <div className = {classes.Modal} style={{
        transform:props.showing ? 'translateY(0)':'translateY(-100vh)',
        opacity:props.showing?'1':'0'
        }}>
        {props.children}
    </div>
    </Aux>
);

export default modal;