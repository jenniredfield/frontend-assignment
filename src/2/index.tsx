import * as React from "react";

//
class Task2 extends React.Component {
  state = {
    value: ''
  };

  handleChange = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    this.setState({ value: target.value })
  }

  render() {
    return (
      <div>
        <label>Controlled Input: </label>
        <input onChange={this.handleChange} />
        <br />
        <br />
        <p>{this.state.value}</p>
      </div>
    );
  }
}

export default Task2;