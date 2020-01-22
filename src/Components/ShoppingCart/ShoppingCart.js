import React from "react";
import Aux from "../../hoc/Aux";
import Button from "../UI/Button/Button";

const shoppingCart = props => {
  const ingredientList = Object.keys(props.ingredients).map(igKey => {
    return (
      <li>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your order:</h3>
      <p>a delicious burger with the following ingredients:</p>
      <ul>{ingredientList}</ul>
      <p>
        <strong>Total Price: €{props.price}</strong>
      </p>
      <p>Continue to checkout?</p>
      <Button btnType="Danger" clicked={props.purchaseCanceled}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.purchaseContinued}>
        CONTINUE
      </Button>
    </Aux>
  );
};

export default shoppingCart;
