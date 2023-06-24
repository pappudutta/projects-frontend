import React, { Component } from "react";
import Counter from "./Counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 0, value: -10, name: "Books" },
      { id: 1, value: 0, name: "Pencil" },
      { id: 2, value: 5, name: "Color Pencils" },
      { id: 3, value: 56, name: "Games" },
    ],
  };
  render() {
    return (
      <div>
        {this.state.counters.map(counter => (
          <Counter key={counter.id} value={counter.value} name={counter.name} />
        ))}
      </div>
    );
  }
}

export default Counters;
