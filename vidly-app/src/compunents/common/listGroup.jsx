import React, { Component } from "react";

const ListGroup = ({
  items,
  valueProperty,
  textProperty,
  onItemSelect,
  selectedItem,
}) => {
  return (
    <div>
      <ul className="list-group">
        {items.map(item => (
          <li
            onClick={() => onItemSelect(item)}
            key={item[valueProperty]}
            className={
              item === selectedItem
                ? "list-group-item active"
                : "list-group-item"
            }
          >
            {item[textProperty]}
          </li>
        ))}
      </ul>
    </div>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};
export default ListGroup;
