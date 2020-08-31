import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import PizzaForm from "./components/PizzaForm";
import PizzaList from "./containers/PizzaList";
class App extends Component {
  state = {
    pizzas: [],

    form: {
      id: "",
      topping: "",
      size: "",
      vegetarian: "",
    },
  };

  componentDidMount() {
    this.getPizzas();
  }

  getPizzas = () => {
    fetch("http://localhost:3000/pizzas")
      .then((response) => response.json())
      .then((pizzas) => this.setState({ pizzas }));
  };

  // takes in a pizza object, set this.state.form to the object
  handleEditClick = (pizza) => this.setState({ form: { ...pizza } });

  // takes a name and value and set this.state.form[name] to that value
  handleInput = (e) => {
    let name = e.target.name,
      value = e.target.value;

    if (value === "true") value = true;
    if (value === "false") value = false;

    const form = {
      ...this.state.form,
      [name]: value,
    };

    this.setState({ form });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();

    const updatedPizza = this.state.form;

    fetch("http://localhost:3000/pizzas/" + updatedPizza.id, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedPizza),
    })
      .then((response) => response.json())
      .then((updatedPizza) => {
        const pizzas = this.state.pizzas.map((p) => {
          if (p.id === updatedPizza.id) return updatedPizza;
          return p;
        });

        const form = {
          id: "",
          topping: "",
          size: "",
          vegetarian: "",
        };

        this.setState({ pizzas, form });
      });
  };

  render() {
    return (
      <Fragment>
        <Header />
        <PizzaForm
          form={this.state.form}
          handleInput={this.handleInput}
          handleFormSubmit={this.handleFormSubmit}
        />
        <PizzaList
          pizzas={this.state.pizzas}
          handleEditClick={this.handleEditClick}
        />
      </Fragment>
    );
  }
}

export default App;
