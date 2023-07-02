import React, { Component } from "react";
import "./App.css";
import Movies from "./compunents/Movies";
import Counters from "./compunents/Counters";
import Practice from "./practice/Practice";
import NavBar from "./compunents/NavBar";

class App extends Component {
  state = {
    counters: [
      { id: 0, value: 10, name: "Books" },
      { id: 1, value: 0, name: "Pencil" },
      { id: 2, value: 5, name: "Color Pencils" },
      { id: 3, value: 56, name: "Games" },
    ],
  };

  constructor(props) {
    super(props);
    // console.log("APP - constructor");
  }
  // below will render last
  componentDidMount(props) {
    // Ajax call
    // console.log("App - Mount: ");
  }

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value++;
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
  };

  render() {
    // console.log("App- rendered");
    return (
      <>
        <NavBar totalCounters={this.state.counters.length} />
        <main className="container">
          <Movies />
          <hr />
          <br />
          <Counters
            counters={this.state.counters}
            onIcreament={this.handleIncrement}
            onDelete={this.handleDelete}
            onReset={this.handleReset}
          />

          {/* <Practice /> */}
        </main>
      </>
    );
  }
}
export default App;
