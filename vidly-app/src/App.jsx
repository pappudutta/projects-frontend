import React, { Component } from "react";
import "./App.css";
import Movies from "./compunents/Movies";
import Counters from "./compunents/Counters";

function App() {
  return (
    <>
      <main className="container">
        {/* <Movies /> */}
        <Counters />
      </main>
    </>
  );
}

export default App;
