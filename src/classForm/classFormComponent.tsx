import React, { Component } from 'react';

class FormComponent extends Component {
  state = {
    firstName: 'Quentin',
    lastName: 'Barroin',
    age: 36
  };

  componentDidMount() {
    console.log('class component did mount');
  }

  handleNameChange = (firstName: string) => {
    this.setState({ firstName });
  };

  handleLastNameChange = (lastName: string) => {
    this.setState({ lastName });
  };

  handleAgeChange = (age: string) => {
    this.setState({ age });
  };

  onSubmit = (e: any) => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="container">
        <h1>Formulaire Class Component</h1>
        <form onSubmit={this.onSubmit}>
          <div className="form-line">
            <label htmlFor="name">Nom</label>
            <input name="name" type="text" onChange={(e) => this.handleNameChange(e.target.value)} value={this.state.firstName}></input>
          </div>
          <div className="form-line">
            <label htmlFor="name">Nom</label>
            <input
              name="lastName"
              type="text"
              onChange={(e) => this.handleLastNameChange(e.target.value)}
              value={this.state.lastName}
            ></input>
          </div>
          <div className="form-line">
            <label htmlFor="name">Nom</label>
            <input name="age" type="number" onChange={(e) => this.handleAgeChange(e.target.value)} value={this.state.age}></input>
          </div>
          <button type="submit" className="form-submit">
            VALIDER
          </button>
          <p>{JSON.stringify(this.state)}</p>
        </form>
      </div>
    );
  }
}

export default FormComponent;
