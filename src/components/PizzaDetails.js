import React from "react";
import { connect } from "react-redux";

class PizzaDetails extends React.Component {
  state = {
    newIngredient: ""
  };

  addIngredientToPizza = () => {
    const { addIngredientToPizza, pizza } = this.props;
    addIngredientToPizza(pizza.id, this.state.newIngredient);
  };

  render() {
    const pizza = this.props.pizza;

    if (!pizza) {
      return <p>Select a pizza to view details</p>;
    }

    return (
      <div>
        <h2>
          {pizza.name}
          <button onClick={this.props.unselectPizza}>close</button>
        </h2>
        <input
          value={this.state.newIngredient}
          onChange={e => {
            this.setState({ newIngredient: e.target.value });
          }}
        />
        <button onClick={this.addIngredientToPizza}>Add Ingredient</button>
        <p>
          <em>{pizza.description}</em>
          <ul>
            {pizza.ingredients.map((ingredient, i) => {
              return <li key={i}>{ingredient}</li>;
            })}
          </ul>
        </p>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    // Note: this could be `undefined`, if no pizza selected
    pizza: reduxState.pizzaList.find(pizza => {
      return pizza.id === reduxState.selectedPizza;
    })
  };
}

function mapDispatchToProps(dispatch) {
  return {
    unselectPizza() {
      dispatch({
        type: "UNSELECT_PIZZA"
      });
    },
    addIngredientToPizza(id, ingredient) {
      dispatch({
        type: "ADD_INGREDIENT_TO_PIZZA",
        payload: {
          id,
          ingredient
        }
      });
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PizzaDetails);
