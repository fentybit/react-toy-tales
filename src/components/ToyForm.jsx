import React, { Component } from "react";

class ToyForm extends Component {
  state = {
    name: "",
    image: "",
  };

  handleOnChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    const newToy = { ...this.state, likes: 0 };

    fetch("http://localhost:3000/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newToy),
    })
      .then((resp) => resp.json())
      .then((newToy) => this.props.createToy(newToy));
  };

  render() {
    return (
      <div className="container">
        <form className="add-toy-form" onSubmit={this.handleOnSubmit}>
          <h3>Create a toy!</h3>
          <input
            type="text"
            name="name"
            onChange={this.handleOnChange}
            placeholder="Enter a toy's name..."
            className="input-text"
          />
          <br />
          <input
            type="text"
            name="image"
            onChange={this.handleOnChange}
            placeholder="Enter a toy's image URL..."
            className="input-text"
          />
          <br />
          <input
            type="submit"
            name="submit"
            value="Create New Toy"
            className="submit"
          />
        </form>
      </div>
    );
  }
}

export default ToyForm;
