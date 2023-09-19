import React, { Component } from "react";

class ClassComponentBox extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, clicks: 0 };
    this.intervalId = setInterval(this.incrementCount, 1000); // Increment every second
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  incrementClickCount = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  };

  componentDidUpdate() {
    if (this.state.clicks === 11) {
      alert("You clicked the counter 10 times, you get a cookie!!!");
      this.setState({ clicks: 0 });
    }
  }

  render() {
    return (
      <>
        <h2>Hi, I am a Car!</h2>
        <button onClick={this.incrementClickCount}>Increase number</button>
        <p>
          You have clicked {this.state.clicks} times, click 10 times for an
          alert and reward!
        </p>
        {this.state.clicks == 10 ? (
          <p>You currently have a 🍪, Stop clicking</p>
        ) : (
          <p>Click 10 time for a cookie, any more and you loose it!</p>
        )}
        <p>You have been on this site for {this.state.count} seconds</p>
      </>
    );
  }
}
export default ClassComponentBox;
