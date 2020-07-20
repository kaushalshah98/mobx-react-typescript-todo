import React from "react";
import Input from "../input/input";
import Add from "../../../shared/add/add";
import { observer } from 'mobx-react';
import "./header.scss";

const Header = () =>
  <>
    <Input></Input>
    <Add></Add>
  </>
  ;

export default observer(Header);
