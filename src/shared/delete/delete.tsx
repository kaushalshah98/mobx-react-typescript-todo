import React, { Fragment, FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { INewItem } from "../interface";
import DataList from '../../store/list';
import "./delete.scss";

const Delete: FC<{ item: INewItem }> = ({ item }) =>
  <Fragment>
    <span>
      <FontAwesomeIcon
        className="faicons"
        icon="trash"
        onClick={() => DataList.onDeleteItem(item.key)}
      ></FontAwesomeIcon>
    </span>
  </Fragment>
  ;

export default Delete;
