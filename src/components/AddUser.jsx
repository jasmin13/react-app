import React, { Component } from "react";

class AddUser extends Component {
  state = {
    name: null,
    age: null,
    belt: null
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={this.handleChange}
          />
          <label htmlFor="age">Age</label>
          <input type="text" name="age" id="age" onChange={this.handleChange} />
          <label htmlFor="belt">Belt</label>
          <input
            type="text"
            name="belt"
            id="belt"
            onChange={this.handleChange}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddUser;
