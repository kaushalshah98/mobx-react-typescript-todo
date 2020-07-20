import React, { Fragment, FC, useContext } from "react";
import "./App.css";
import NavBar from "./components/navbar/navbar";
import Container from "./components/to-do-container/container";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { observer } from 'mobx-react';
import DataList from './store/list';

library.add(faTrash);

const App: FC<any> = (observer(props => {
  const datalist = useContext(DataList);
  const { totalItems } = datalist;
  return (
    <Fragment>
      <NavBar totalItems={totalItems}></NavBar>
      <Container></Container>
    </Fragment>
  );
}));

export default App;
