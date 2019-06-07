import React, {Component} from 'react';
import Aux from '../../hoc/AuxControl';
import classes from '../Layout/Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component{ 
    
    state={
        showSideDrawer:false
    }
    sideDrawerCloseHandler=()=>{
        this.setState({showSideDrawer:false});
    }
    sideDrawerToggleHandler=()=>{
        this.setState((prevState)=>{
            return{showSideDrawer:!prevState.showSideDrawer}
        });
    }
 

    render(){
        return(  
        <Aux>
           <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
            <SideDrawer closed={this.sideDrawerCloseHandler} open={this.state.showSideDrawer}/>
            <main className={classes.Container}>
                {this.props.children}
                
            </main>
        </Aux>
    
    );
    
    }
  
}

export default Layout;

