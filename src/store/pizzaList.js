const initialState = [
  {
    id: 1,
    name: "Pizza Margarita",
    description: "Minimalism is key!"
  },
  {
    id: 2,
    name: "Pizza Napoletana",
    description: "Like Margarita, but without the basil."
  },
  {
    id: 3,
    name: "Pizza Bianca",
    description: "Did somebody say oil?"
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
          description: ""
        }
      ];
    }
    default: {
      return state;
    }
  }
}
