import * as React from "react";
// Style
/*
* Styles goes inside this Less file
*/
import "./index.less";

//
class Task5 extends React.Component {
  state = {
    email: "",
    password: "",
    animated: ""
  };

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    });
  };

  handleFocus = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      animated: e.currentTarget.name
    });
  };

  handleBlur = () => {
    this.setState({
      animated: ""
    });
  };

  render() {
    const { animated } = this.state;
 
    return (
      <form className="form">
        <div className="form__row">
          <label className={`form__label ${animated === 'email' ? 'form__label--animated' : ''}`}>Email</label>
          <input
            name="email"
            onChange={this.handleInputChange}
            value={this.state.email}
            className="form__input"
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
          />

        </div>

        <div className="form__row">
          <label className={`form__label ${animated === 'password' ? 'form__label--animated' : ''}`}>Password</label>
          <input
            name="password"
            onChange={this.handleInputChange}
            value={this.state.password}
            className="form__input"
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
          />
        </div>
        <button className="form__button">Login</button>
      </form>
    );
  }
}

export default Task5;
