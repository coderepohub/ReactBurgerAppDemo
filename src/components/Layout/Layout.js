import React from 'react';
import Aux from '../../hoc/AuxControl';
import classes from '../Layout/Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = (props) => (
    <Aux>
       <Toolbar/>
        <main className={classes.Container}>
            {props.children}
            
        </main>
    </Aux>

);

export default layout;

