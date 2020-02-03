import * as React from "react";
// Components
import Item from "./Item";

/*
     * The IProps interface defines the props in order to typescript to typecheck for errors.
     * 
     * If you would like to proceed without defining types do the following: 
     * const Input: React.SFC<any> = (props) => {
     *                        ^^^
     * 
     * and remove the IProps interface
*/

//
interface IProps {
  listData: Array<string>,
  inputValue: string
}

const List: React.SFC<IProps> = ({listData, inputValue}) => {
  return <div>
      <ul>
      {
          listData.filter(x => {
            if (!inputValue) {
              return true;
            }

            return inputValue.toLowerCase().substring(0, inputValue.length) === x.toLowerCase().substring(0, inputValue.length);
          }).map((value, i) => {
            return (
              <Item key={`${value}_${i}`} value={value}/>
            );
          })}
      </ul>
  </div>;
};

export default List;
