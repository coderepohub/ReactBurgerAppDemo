import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';

const navigationItems = ()=>(
  <ul className={classes.NavigationItems}>
      <NavigationItem active link="/">Burger Builder</NavigationItem>
      <NavigationItem>Checkout</NavigationItem>
  </ul>
);

export default navigationItems;