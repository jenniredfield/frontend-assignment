import * as React from "react";

interface IProps {
  handleChange: React.ChangeEventHandler<HTMLInputElement>
}

const Input: React.SFC<IProps> = (props) => {
  const {handleChange} = props;
  return (
    <div>
      <label>Search Input: </label>
      <input onChange={handleChange} />
    </div>
  );
};

export default Input;