import PersonalInfo from "./components/PersonalInfo.js";
import WorkExp from "./components/WorkExp.js";
import Display from "./components/Display.js";
import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = { data: { personal: "" }, data2: { workExp: [""] } };

  callbackFunction = (childData) => {
    this.setState({ data: { personal: childData } });
  };

  callbackFunctionTwo = (childData) => {
    this.setState({ data2: { workExp: childData } });
  };

  render() {
    return (
      <div className="App">
        <div className="input">
          <PersonalInfo parentCallback={this.callbackFunction} />

          <WorkExp parentCallback={this.callbackFunctionTwo} />
        </div>
        <Display data={this.state.data} data2={this.state.data2} />
      </div>
    );
  }
}

export default App;
