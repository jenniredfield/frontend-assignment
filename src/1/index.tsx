import * as React from "react";

//
class Task1 extends React.Component {
  state = {
    data: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"]
  };
  render() {
    const {data} = this.state;
    return (
      <div>
        <ul>
          {data.map((x, i) => {
            return <li key={`${x}_${i}`}>{x}</li>
          })}
        </ul>
      </div>
    );
  }
}

export default Task1;
