import * as React from "react";

// Components
import Input from "./components/Input";
import List from "./components/List";
import {countriesList} from './data/CountriesList';

//
class Task4 extends React.Component {

  state = {
    inputValue: "",
    listData: countriesList
  }

  handleChange = (e: React.SyntheticEvent): void => {
    const target = e.target as HTMLInputElement;
    this.setState({ inputValue: target.value })
  }

  render() {
    const {inputValue, listData} = this.state;
    return (
      <div>
        <Input handleChange={this.handleChange}/>
        <br />
        <List listData={listData} inputValue={inputValue}/>
      </div>
    );
  }
}

export default Task4;
