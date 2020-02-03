import * as React from "react";

//
class Task3 extends React.Component {
  state = {
    inputValue: "",
    data: ["Banana", "Apple", "Pear"]
  };

  handleChange = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    this.setState({ inputValue: target.value })
  }

  render() {
    const { inputValue, data } = this.state;
    return (
      <div>
        <label>Search Input: </label>
        <input onChange={this.handleChange} />
        <br />
        <br />
        {
          data.filter(x => {
            if (!inputValue) {
              return true;
            }

            return inputValue.toLowerCase().substring(0, inputValue.length) === x.toLowerCase().substring(0, inputValue.length);
          }).map((value, i) => {
            return (
              <li key={`${value}_${i}`}>{value}</li>
            );
          })}
      </div>
    );
  }
}

export default Task3;
