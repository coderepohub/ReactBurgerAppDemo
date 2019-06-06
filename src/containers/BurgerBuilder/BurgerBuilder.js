import React,{Component} from 'react';
import Aux from '../../hoc/AuxControl'
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    salad:7,
    cheese:11,
    meat:20,
    bacon:15
}

class BurgerBuilder extends Component{
    state={
        ingredients:{
            salad :0,
            bacon :0,
            cheese:0,
            meat : 0

        },
        totalPrice : 40,
        isPurchasable : false,
        isPurchasing : false,

    }


    purchaseHandler =()=>{
            this.setState({isPurchasing:true});
        
    };

    cancelPurchaseHandler=()=>{
            this.setState({isPurchasing:false});
    };

    updatePurchasableState(ingredients){
        const sum  = Object.keys(ingredients).map(ingkey=>{
            return ingredients[ingkey];
        })
        .reduce((sum,element)=>{
            return sum+element;
        },0);

        this.setState({isPurchasable:sum>0});

    }

    addIngredientHandler = (type) =>{
        var oldCount  = this.state.ingredients[type];
        var updatedCount = oldCount+1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const itemPrice  = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice+itemPrice;
        this.setState({totalPrice:newPrice,ingredients:updatedIngredients});
        this.updatePurchasableState(updatedIngredients);

    }

    removeIngredientHandler = (type) =>{
        var oldCount = this.state.ingredients[type];
        if(oldCount>0){
        var updatedCount = oldCount-1;
        const updatedIngredients={
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const itemPrice = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice-itemPrice;
        this.setState({totalPrice:newPrice,ingredients:updatedIngredients});
        this.updatePurchasableState(updatedIngredients);
    }
    }

    render(){
        const disabledInfo={
            ...this.state.ingredients
        };
      for(let key in disabledInfo){
          disabledInfo[key] = disabledInfo[key]<=0;
      }
        return(
            <Aux>
                <Modal showing= {this.state.isPurchasing} closeModal = {this.cancelPurchaseHandler}>
                    <OrderSummary ingredients={this.state.ingredients}/>
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls ingredientAdded={this.addIngredientHandler} 
                ingredientRemoved = {this.removeIngredientHandler}
                disabled = {disabledInfo}
                price = {this.state.totalPrice}
                isPurchasable = {this.state.isPurchasable}
                ordered = {this.purchaseHandler}/>
            </Aux>
        );
    }
}

export default BurgerBuilder;

