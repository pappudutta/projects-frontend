import React, { useState } from "react";

export default function Practice() {
  const [count, setCount] = useState(0);

  const products = [
    { title: "Cabbage", id: 1, isFruit: true },
    { title: "Potato", id: 2, isFruit: true },
    { title: "Cucumber", id: 3, isFruit: false },
    { title: "Carrot", id: 4, isFruit: true },
  ];
  const listItem = products.map(product => (
    <li key={product.id} style={{ color: product.isFruit ? "green" : "red" }}>
      {" "}
      {product.title}{" "}
    </li>
  ));

  const handleClick = () => {
    console.log("Console");
    setCount(count + 1);
  };

  return (
    <div>
      <ul>{listItem}</ul>
      <button onClick={handleClick} className="btn btn-success">
        {" "}
        Click to console{" "}
      </button>
      <div>
        <span className=" badge bg-warning">{count} </span>
        <button onClick={handleClick} className="m-2 btn btn-primary">
          Count
        </button>
      </div>
    </div>
  );
}
