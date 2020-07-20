import React, { Fragment, FC, } from "react";
import NavBar from "./components/navbar/navbar";
import Container from "./components/to-do-container/container";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { observer } from 'mobx-react';
import DataList from './store/list';
import "./App.css";

library.add(faTrash);

const App: FC<any> = () => {
  const { totalItems } = DataList;
  return (
    <Fragment>
      <NavBar totalItems={totalItems}></NavBar>
      <Container></Container>
    </Fragment>
  );
};

export default observer(App);
