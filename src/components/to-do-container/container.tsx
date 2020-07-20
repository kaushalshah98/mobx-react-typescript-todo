import React, { memo } from "react";
import Header from "./header/header";
import ListContainer from "./list-container/list-container";
import "./container.scss";

const TodoContainer = () => {
  return (
    <div className="containerr">
      <Header></Header>
      <ListContainer></ListContainer>
    </div>
  );
};

export default memo(TodoContainer);
