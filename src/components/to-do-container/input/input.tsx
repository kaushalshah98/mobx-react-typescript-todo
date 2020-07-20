import React, { FC } from "react";
import DataList from '../../../store/list';
import { observer } from 'mobx-react';
import "./input.scss";

const Input: FC = (observer(() => {
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
}));

export default Input;
