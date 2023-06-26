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
    initialCounters: [],
  };

  countersDidMount = () => {
    this.setState({ initialCounters: [...this.state.counters] });
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value++;
    this.setState({ counters: counters });
  };

  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value--;
    this.setState({ counters: counters });
  };

  handleDelete = currentIdFromDeleteBtn => {
    const counters = this.state.counters.filter(
      c => c.id !== currentIdFromDeleteBtn
    );
    this.setState({ counters: counters });
  };
  handleReset = () => {
    const initialCounters = this.state.counters.map(c => ({ ...c, value: 0 }));
    this.setState({ counters: initialCounters });
    this.countersDidMount();
  };

  // handleColor = () => {
  //   const value = this.state.counters.map(c => c);
  //   console.log(value);
  //   if (value === 0) {
  //     return "badge bg-warning";
  //   }
  // };
  render() {
    return (
      <div>
        <button className="my-3 btn btn-primary" onClick={this.handleReset}>
          Reset
        </button>

        {this.state.counters.map(counter => (
          <Counter
            id={counter.id}
            key={counter.id}
            onDelete={this.handleDelete}
            onIncreament={this.handleIncrement}
            onDecrement={this.handleDecrement}
            // onColor={this.handleColor()}
            value={counter.value}
            name={counter.name}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
