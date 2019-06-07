import React from 'react';
import Aux from '../../../hoc/AuxControl/AuxControl';
import Button from '../../UI/Button/Button';
const orderSummary = (props)=>{
    const ingredientsSummary = Object.keys(props.ingredients)
    .map(ingKey=>{
        return <li key={ingKey}><span style={{textTransform: 'capitalize'}}>{ingKey} :</span> {props.ingredients[ingKey]} </li>
    });
return(
  <Aux>
      <h3>Your Order : </h3>
      <p>A delicious burger with the following ingredients: </p>
      <ul>
        {ingredientsSummary}
      </ul>
      <p><strong>Total Price : {props.price} INR</strong></p>
      <p>Continue to checkout ?</p>
      <Button btnType ="Danger" clicked={props.cancelPurchaseClicked}>CANCEL</Button>
      <Button btnType= "Success" clicked={props.continuePurchaseClicked}>CONTINUE</Button>
  </Aux>
);
};

export default orderSummary;