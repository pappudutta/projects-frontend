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

    const { counter, onIcreament, onDelete, onDecrement } = this.props;

    const disabled = counter.value <= 0 ? "disabled" : null;

    return (
      <div className="row align-items-center">
        <div className="col-1">
          <div
            className={
              counter.value > 0 ? "badge bg-primary" : "badge bg-warning"
            }
          >
            {counter.value === 0 ? "Zero" : counter.value}
          </div>
        </div>
        <div className="col-1">
          <button
            onClick={() => onIcreament(counter)}
            className="m-2 btn btn-secondary"
          >
            +
          </button>
        </div>

        <div className="col-1">
          <button
            type="button"
            onClick={() => onDecrement(counter)}
            className="m-2 btn btn-secondary"
            disabled={disabled}
          >
            -
          </button>
        </div>

        <div className="col-1">
          <button
            key={this.key}
            onClick={() => onDelete(counter.id)}
            className="m-2 btn btn-light"
          >
            🗑️
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
