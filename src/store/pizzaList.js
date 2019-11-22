const initialState = [
  {
    id: 1,
    name: "Pizza Margarita",
    description: "Minimalism is key!",
    ingredients: ["Dough", "Tomatoe Sauce", "Muzzarella"]
  },
  {
    id: 2,
    name: "Pizza Napoletana",
    description: "Like Margarita, but without the basil.",
    ingredients: ["Dough", "Tomatoe Sauce", "Muzzarella", "Basil"]
  },
  {
    id: 3,
    name: "Pizza Bianca",
    description: "Did somebody say oil?",
    ingredients: ["Dough", "Olive Oil", "Muzzarella"]
  }
];

export default function pizzaListReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_PIZZA": {
      // => Ask yourself: what is action.payload?
      return [
        ...state,
        {
          id: state[state.length - 1].id + 1,
          name: action.payload.name,
          description: "",
          ingredients: action.payload.ingredients
        }
      ];
    }
    case "ADD_INGREDIENT_TO_PIZZA": {
      return state.map(pizza => {
        if (pizza.id === action.payload.id) {
          return {
            ...pizza,
            ingredients: [...pizza.ingredients, action.payload.ingredient]
          };
        } else {
          return pizza;
        }
      });
    }
    default: {
      return state;
    }
  }
}
