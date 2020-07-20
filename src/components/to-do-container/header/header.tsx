import React, { FC } from "react";
import Input from "../input/input";
import Add from "../../../shared/add/add";
import { observer } from 'mobx-react';
import "./header.scss";

const Header: FC<any> = (observer(props => {
  return (
    <>
      <Input></Input>
      <Add></Add>
    </>
  );
}));

export default Header;
