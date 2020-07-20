import React, { FC, memo } from "react";
import NavBarHTML from './navbar.html';
import { observer } from 'mobx-react';
import "./navbar.scss";

const NavBar: FC<{ totalItems: number }> = ({ totalItems }) => <NavBarHTML totalItems={totalItems} />;

export default memo(observer(NavBar));
