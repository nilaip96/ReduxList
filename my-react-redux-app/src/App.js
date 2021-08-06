import React from "react";
import "./App.css";
import { connect } from "react-redux";

import {
  increaseCounter,
  decreaseCounter,
  resetCounter,
  halfCounter,
  doubleCounter,
} from "./redux/Counter/counter.actions";

const App = (props) => {
  return (
    <div className="App">
      <div>Count:{props.count}</div>
      <button onClick={() => props.increaseCounter()}>Increase Count</button>
      <button onClick={() => props.decreaseCounter()}>Decrease Count</button>
      <button onClick={() => props.doubleCounter()}>Double Count</button>
      <button onClick={() => props.halfCounter()}>Half Count</button>
      <button onClick={() => props.resetCounter()}>Reset Count</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.counter.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increaseCounter: () => dispatch(increaseCounter()),
    decreaseCounter: () => dispatch(decreaseCounter()),
    doubleCounter: () => dispatch(doubleCounter()),
    halfCounter: () => dispatch(halfCounter()),
    resetCounter: () => dispatch(resetCounter()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
