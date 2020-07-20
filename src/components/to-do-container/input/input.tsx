import React from "react";
import DataList from '../../../store/list';
import { observer } from 'mobx-react';
import "./input.scss";

const Input = () => {
  const { newItem, onHandleInput } = DataList;
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
};

export default observer(Input);
