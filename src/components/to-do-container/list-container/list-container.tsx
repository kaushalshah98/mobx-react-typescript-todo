import React, { Fragment, memo, useContext, FC } from "react";
import "./list-container.scss";
import List from "../list/list";
import DataList from '../../../store/list';
import { observer } from 'mobx-react';

const ListContainer: FC = (observer(() => {
  const { list } = useContext(DataList);
  const listItems = list.map((item) => <List key={item.key} item={item} />);
  return <Fragment>{listItems}</Fragment>;
}));

export default memo(ListContainer);
