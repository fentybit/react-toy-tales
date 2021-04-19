import React, { Component } from "react";

class ToyCard extends Component {
  handleDeleteClick = () => {
    const findId = this.props.id;
    fetch(`http://localhost:3000/toys/${findId}`, {
      method: "DELETE",
    })
      .then((resp) => resp.json())
      .then((data) => this.props.deleteToy(findId));
  };

  handleUpdate = () => {
    const findId = this.props.id;
    fetch(`http://localhost:3000/toys/${findId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ likes: this.props.likes + 1 }),
    })
      .then((resp) => resp.json())
      .then((updatedToy) => this.props.updateToy(updatedToy));
  };

  render() {
    return (
      <div className="card">
        <h2>{this.props.name}</h2>
        <img
          src={this.props.image}
          alt={this.props.name}
          className="toy-avatar"
        />
        <p>{this.props.likes} Likes </p>
        <button className="like-btn" onClick={this.handleUpdate}>
          Like {"<3"}
        </button>
        <button className="del-btn" onClick={this.handleDeleteClick}>
          Donate to GoodWill
        </button>
      </div>
    );
  }
}

export default ToyCard;
