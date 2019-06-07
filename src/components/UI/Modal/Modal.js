import React,{Component} from 'react'
import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';
import Aux from '../../../hoc/AuxControl/AuxControl';
class Modal extends Component{
    shouldComponentUpdate(nextProps,nextState){
        return nextProps.showing!==this.props.showing;
    }
    componentWillUpdate(){
        console.log("Component is gng to be updated");
    }
    render(){
        return(
    <Aux>
        <Backdrop show={this.props.showing} clicked ={this.props.closeModal}/>
    <div className = {classes.Modal} style={{
        transform:this.props.showing ? 'translateY(0)':'translateY(-100vh)',
        opacity:this.props.showing?'1':'0'
        }}>
        {this.props.children}
    </div>
    </Aux>
);
    }
    }

export default Modal;