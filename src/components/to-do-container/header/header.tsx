import React, { FC } from "react";
import Input from "../input/input";
import Add from "../../../shared/add/add";
import "./header.scss";

const Header: FC = () => {
  return (
    <>
      <Input></Input>
      <Add></Add>
    </>
  );
};

export default Header;
