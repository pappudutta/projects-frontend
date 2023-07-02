import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevState, prevProps) {
    console.log("prevState: ", prevState);
    console.log("prevProps: ", prevProps);
  }

  componentWillUnmount() {
    console.log("Unmount");
  }

  render() {
    console.log("App - Counter rendered");

    const { counter, onIcreament, onDelete } = this.props;
    return (
      <div>
        <h2> {counter.name} </h2>
        {/*  */}
        <span
          className={
            counter.value > 0 ? "badge bg-primary" : "badge bg-warning"
          }
        >
          {counter.value === 0 ? "Zero" : counter.value}
        </span>

        <span>
          <button
            onClick={() => onIcreament(counter)}
            className="m-2 btn btn-secondary"
          >
            Increament
          </button>
        </span>
        <span>
          <button
            key={this.key}
            onClick={() => onDelete(counter.id)}
            className="m-2 btn btn-danger"
          >
            Delete
          </button>
        </span>
      </div>
    );
  }
}

export default Counter;
