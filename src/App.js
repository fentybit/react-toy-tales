import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'


class App extends React.Component {
  state = {
    display: false,
    toys: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/toys')
      .then(resp => resp.json())
      .then(fetchedToys => this.setState({ toys: fetchedToys }))
  }

  createToy = (newToy) => {
    this.setState({ toys: [...this.state.toys, newToy], display: false })
  }

  deleteToy = (id) => {
    const updatedToys = this.state.toys.filter(toy => toy.id !== id)
    this.setState({ toys: updatedToys })
  }

  updateToy = (updatedToy) => {
    const updatedToys = this.state.toys.map(toy => {
      if (toy.id === updatedToy.id) {
        return updatedToy
      } else {
        return toy
      }
    })

    this.setState({ toys: updatedToys })
  }

  handleClick = () => {
    this.setState({
      display: !this.state.display
    })
  }

  render() {
    return (
      <>
        <Header />
        { this.state.display
          ?
          <ToyForm createToy={this.createToy} />
          :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer toys={this.state.toys} deleteToy={this.deleteToy} updateToy={this.updateToy} />
      </>
    );
  }
}

export default App;