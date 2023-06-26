import React, { Component } from "react";
import "./App.css";
import Movies from "./compunents/Movies";
import Counters from "./compunents/Counters";
import Practice from "./practice/Practice";

function App() {
  return (
    <>
      <main className="container">
        {/* <Movies /> */}
        <Counters />
        {/* <Practice />  */}
      </main>
    </>
  );
}

export default App;
