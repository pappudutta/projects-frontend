import React, { Component } from "react";

class Counter extends Component {
  state = {
    counter: this.props.value,
  };

  handleIncreament = () => {
    this.setState({ count: (this.state.counter += 1) });
  };

  handleDecreament = () => {
    this.setState({ count: (this.state.counter -= 1) });
  };

  handleColor = () => {
    const counter = this.state.counter;
    if (counter < 0) {
      return `p-2 badge text-bg-danger`;
    } else if (counter > 0) {
      return "p-2 badge text-bg-primary";
    } else {
      return "p-2 badge text-bg-warning";
    }
  };

  render() {
    return (
      <div>
        <h2> {this.props.name} </h2>
        <span
          className={this.handleColor()}
          //   {
          //     this.state.counter < 0
          //       ? "p-2 badge text-bg-danger"
          //       : "p-2 badge text-bg-primary"
          //   }
        >
          {this.state.counter === 0 ? "Zero" : this.state.counter}
        </span>
        <span>
          <button
            onClick={this.handleIncreament}
            className="m-2 btn btn-secondary"
          >
            Increament
          </button>
        </span>
        <span>
          <button
            onClick={this.handleDecreament}
            className="m-2 btn btn-secondary"
          >
            Decreament
          </button>
        </span>
      </div>
    );
  }
}

export default Counter;
