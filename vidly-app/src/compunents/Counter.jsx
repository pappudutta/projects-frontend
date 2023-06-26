import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div>
        <h2> {this.props.name} </h2>
        {/*  */}
        <span
          className={
            this.props.value > 0
              ? "badge bg-primary"
              : this.props.value < 0
              ? "badge bg-danger"
              : "badge bg-warning"
          }
        >
          {this.props.value === 0 ? "Zero" : this.props.value}
        </span>
        <span>
          <button
            onClick={() => this.props.onIncreament(this.props.counter)}
            className="m-2 btn btn-secondary"
          >
            Increament
          </button>
        </span>
        <span>
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="m-2 btn btn-secondary"
          >
            Decreament
          </button>
        </span>
        <span>
          <button
            key={this.key}
            onClick={() => this.props.onDelete(this.props.id)}
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
