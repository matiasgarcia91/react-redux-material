import React from "react";
import "./App.css";
import PizzaList from "./components/PizzaList";
import PizzaDetails from "./components/PizzaDetails";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PizzaList />
        <PizzaDetails />
      </header>
    </div>
  );
}

export default App;
