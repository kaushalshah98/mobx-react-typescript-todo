import React, { useContext, FC } from "react";
import Delete from "../../../shared/delete/delete";
import "./list.scss";
import { observer } from 'mobx-react';
import DataList from '../../../store/list';

const List: FC<any> = (observer(props => {
  const datalist = useContext(DataList);
  const { onDeleteItem, onUpdateItem } = datalist;
  return (
    <div className="list">
      <p>
        <input
          type="text"
          value={props.item.value}
          onChange={(e) => onUpdateItem(props.item.key, e.target.value)}
        ></input>
        <Delete onDeleteItem={() => onDeleteItem(props.item.key)}></Delete>
      </p>
    </div>
  );
}));
export default List;
