import React, { Component } from "react";
import Counter from "./Counter";

class Counters extends Component {
  render() {
    // console.log("App - Counters rendered");
    const { onDelete, onIcreament, onReset, counters } = this.props;
    return (
      <div>
        <button className="my-3 btn btn-primary" onClick={onReset}>
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIcreament={onIcreament}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
