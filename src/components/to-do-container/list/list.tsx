import React, { FormEvent, useContext, FC } from "react";
import Delete from "../../../shared/delete/delete";
import "./list.scss";
import { INewItem } from "../../../shared/interface";
import DataList from '../../../store/list';

const List: FC<any> = ({ item }) => {
  console.log(item);
  const datalist = useContext(DataList);
  const { onDeleteItem, onUpdateItem } = datalist;
  return (
    <div className="list">
      <p>
        <input
          type="text"
          value={item.value}
          onChange={(e) => onUpdateItem(item.key, e.target.value)}
        ></input>
        <Delete onDeleteItem={() => onDeleteItem(item.key)}></Delete>
      </p>
    </div>
  );
};
export interface listProps {
  item: INewItem;
  onUpdateItem: (arg0: number, arg1: string) => void;
  onDeleteItem: (agr0: number) => FormEvent;
}
export default List;
