import React, { Fragment, memo, useContext } from "react";
import "./list-container.scss";
import List from "../list/list";
import DataList from '../../../store/list';

const ListContainer = () => {
  const datalist = useContext(DataList);
  const { list } = datalist;
  const listItems = list.map((item) => {
    return (
      <List key={item.key} item={item} />
    );
  });
  return <Fragment>{listItems}</Fragment>;
};

export default memo(ListContainer);
