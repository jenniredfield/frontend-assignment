import * as React from "react";

interface IProps {
  value: string
}
const Item: React.SFC<IProps> = props => {
  const { value } = props;
  return <li>{value}</li>;
};

export default Item;
