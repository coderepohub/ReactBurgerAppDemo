import React from 'react';
import Aux from '../../hoc/AuxControl';
import classes from '../Layout/Layout.module.css';

const layout = (props) => (
    <Aux>
        <div>Toolbar, SideDrawer, Backdrawer</div>
        <main className={classes.Container}>
            {props.children}
            
        </main>
    </Aux>

);

export default layout;