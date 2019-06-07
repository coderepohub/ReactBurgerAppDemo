import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.module.css';

const burger = (props)=>{
    //props what we are recieving is an object not an array, so what we have to do is 
    //we have to transform the keys from an object to an array
    //For this we will use the JS default Object class which has keys method and it will give an array of keys
    //Here we will use map function , which in return executes on each element
    //Inside that we will transform the string value into an array with as many elements as we have in ingredient elements
    //eg. cheese:2 means two cheese ingredients
    let transformedIngredients = Object.keys(props.ingredients)
    .map(ingKeyArg=>{
        //Create an Array 
        return[...Array(props.ingredients[ingKeyArg])].map((_,index)=>{
            return <BurgerIngredient key ={ingKeyArg+index} type={ingKeyArg}/>;
        })
    })//Above will return array of array now we will reduce it to single array
        .reduce((arr,el)=>{
            return arr.concat(el)
        },[]);

    if(transformedIngredients.length===0){
        transformedIngredients = <p>Please Start adding Ingredients!</p>
    }
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top'/>
           {transformedIngredients}
            <BurgerIngredient type='bread-bottom'/>
        </div>
    );
};

export default burger;
