import React, { useContext, FC } from "react";
import Delete from "../../../shared/delete/delete";
import "./list.scss";
import { observer } from 'mobx-react';
import DataList from '../../../store/list';
import { INewItem } from "../../../shared/interface";

const List: FC<{ item: INewItem }> = (observer(({ item }) => {
  const { onDeleteItem, onUpdateItem } = useContext(DataList);;
  return (
    <div className="list">
      <p>
        <input
          type="text"
          value={item.value}
          onChange={(e) => onUpdateItem(item.key, e.target.value)}
        />
        <Delete onDeleteItem={() => onDeleteItem(item.key)} />
      </p>
    </div>
  );
}));
export default List;
