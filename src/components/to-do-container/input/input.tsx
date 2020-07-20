import React, { useContext, FC } from "react";
import "./input.scss";
import DataList from '../../../store/list';
import { observer } from 'mobx-react';

const Input: FC<any> = (observer(props => {
  const datalist = useContext(DataList);
  const { newItem, onHandleInput } = datalist;
  return (
    <div className="form">
      <header>
        <form id="todo-form">
          <input
            type="text"
            onChange={onHandleInput}
            placeholder="Type..."
            value={newItem.value}
          ></input>
        </form>
      </header>
    </div>
  );
}));

export default Input;
