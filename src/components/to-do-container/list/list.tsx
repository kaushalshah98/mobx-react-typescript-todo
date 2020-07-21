import React, { FC } from "react";
import Delete from "../../../shared/delete/delete";
import { observer } from 'mobx-react';
import DataList from '../../../store/list';
import { INewItem } from "../../../shared/interface";
import "./list.scss";

const List: FC<{ item: INewItem }> = ({ item }) => {
  const { onUpdateItem } = DataList;
  return (
    <div className="list">
      <p>
        <input
          type="text"
          value={item.value}
          onChange={(e) => onUpdateItem(item.key, e.target.value)}
        />
        <Delete item={item} />
      </p>
    </div>
  );
};
export default observer(List);
