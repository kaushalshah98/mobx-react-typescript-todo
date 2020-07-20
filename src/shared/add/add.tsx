import React, { FC, useContext } from "react";
import "./add.scss";
import DataList from '../../store/list';

const Add: FC = () => {
  const datalist = useContext(DataList);
  const { onAddItem } = datalist;
  return (
    <div className="add-btn">
      <button onClick={onAddItem}>ADD</button>
    </div>
  );
};

export default Add;
