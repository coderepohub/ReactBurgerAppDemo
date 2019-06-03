import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.module.css';

const burger = (props)=>{
    //props what we are recieving is an object not an array, so what we have to do is 
    //we have to transform the keys from an object to an array
    //For this we will use the JS default Object class which has keys method and it will give an array of keys
    //const transformedIngredients = Object.keys()
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top'/>
            <BurgerIngredient type='cheese'/>
            <BurgerIngredient type='meat'/>
            <BurgerIngredient type='bread-bottom'/>
        </div>
    );
};

export default burger;
