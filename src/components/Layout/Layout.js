import React from 'react';
import Aux from '../../hoc/AuxControl';
import classes from '../Layout/Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const layout = (props) => (
    <Aux>
        <SideDrawer/>
       <Toolbar/>
        <main className={classes.Container}>
            {props.children}
            
        </main>
    </Aux>

);

export default layout;

