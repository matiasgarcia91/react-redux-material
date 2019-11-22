import React from "react";
import { connect } from "react-redux";

class PizzaList extends React.Component {
  state = {
    newPizzaName: ""
  };

  handleAddClick = () => {
    /* this.props.dispatch({
      type: "ADD_PIZZA",
      payload: { name: this.state.newPizzaName }
    }); */
    this.props.addPizza(this.state.newPizzaName);
  };

  render() {
    return (
      <div>
        <h1>Pizza Explorer</h1>
        <ul>
          {this.props.pizzas.map(pizza => {
            return <li key={pizza.id}>{pizza.name}</li>;
          })}
        </ul>
        <p>
          New pizza:
          <input
            value={this.state.newPizzaName}
            onChange={e => {
              this.setState({ newPizzaName: e.target.value });
            }}
          />
          <button onClick={this.handleAddClick}>Add</button>
        </p>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    pizzas: reduxState
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addPizza(pizzaName) {
      dispatch({
        type: "ADD_PIZZA",
        payload: {
          name: pizzaName
        }
      });
    }
  };
}

const connectingHOC = connect(mapStateToProps, mapDispatchToProps);

const ConnectedPizzaList = connectingHOC(PizzaList);

export default ConnectedPizzaList;
