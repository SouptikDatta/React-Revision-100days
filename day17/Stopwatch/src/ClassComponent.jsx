import React, { Component } from 'react';
import './App.css';

class ClassComponent extends Component {
  constructor(props) {
    super(props);

    // Initializing a counter ref
    this.counterRef = React.createRef();

    // Initial state
    this.state = {
      count: 0,
    };
  }

  // Start function clearing the previous ref first to handle multi-click
  handleStart = () => {
    clearInterval(this.counterRef.current);
    this.counterRef.current = setInterval(() => {
      this.setState((prevState) => ({
        count: prevState.count + 1,
      }));
    }, 1000);
  };

  // Clearing the timer function
  handleStop = () => {
    clearInterval(this.counterRef.current);
  };

  // Clearing the timer function and reset it to 0
  handleReset = () => {
    clearInterval(this.counterRef.current);
    this.setState({
      count: 0,
    });
  };

  // This is for when you unmount the component if the timer is still running to prevent memory leaks
  componentWillUnmount() {
    clearInterval(this.counterRef.current);
  }

  render() {
    const { count } = this.state;

    return (
      <>
        <h1>Stopwatch</h1>
        <h2>Timer: {count} sec</h2>
        <div className='card'>
          <button className="btn start" onClick={this.handleStart}>Start</button>
          <button className="btn stop" onClick={this.handleStop}>Stop</button>
          <button className="btn reset" onClick={this.handleReset}>Reset</button>
        </div>
      </>
    );
  }
}

export default ClassComponent;
