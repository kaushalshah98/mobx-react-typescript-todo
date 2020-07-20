import React from "react";
import "./add.scss";
import DataList from '../../store/list';

const Add = () => {
  const { onAddItem } = DataList;
  return (
    <div className="add-btn">
      <button onClick={onAddItem}>ADD</button>
    </div>
  );
};

export default Add;
