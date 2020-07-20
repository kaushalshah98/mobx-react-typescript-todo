import React, { FC, memo } from "react";
import NavBarHTML from './navbar.html';
import { observer } from 'mobx-react';
import "./navbar.scss";

const NavBar: FC<any> = (observer(props => {
  return (
    <NavBarHTML totalItems={props.totalItems} />
  );
}));

export default memo(NavBar);
