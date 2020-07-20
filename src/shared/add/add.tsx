import React, { FC, useContext } from "react";
import "./add.scss";
import DataList from '../../store/list';

const Add: FC = () => {
  const { onAddItem } = useContext(DataList);
  return (
    <div className="add-btn">
      <button onClick={onAddItem}>ADD</button>
    </div>
  );
};

export default Add;
