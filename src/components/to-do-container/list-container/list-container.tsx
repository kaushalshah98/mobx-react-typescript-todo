import React, { Fragment, memo, useContext, FC } from "react";
import "./list-container.scss";
import List from "../list/list";
import DataList from '../../../store/list';
import { observer } from 'mobx-react';

const ListContainer: FC<any> = (observer(props => {
  const datalist = useContext(DataList);
  const { list } = datalist;
  const listItems = list.map((item) => {
    return (
      <List key={item.key} item={item} />
    );
  });
  return <Fragment>{listItems}</Fragment>;
}));

export default memo(ListContainer);
