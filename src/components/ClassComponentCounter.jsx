import React, { Component } from "react";

class ClassComponentBox extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, clicks: 0, showAlert: false };
    this.intervalId = setInterval(this.incrementCount, 1000); // Increment every second
  }

  incrementClickCount = () => {
    this.setState({ clicks: this.state.clicks + 1 });

    if (this.state.clicks == 9) {
      this.setState({ showAlert: true });
    }
  };

  componentDidUpdate() {
    if (this.state.showAlert) {
      alert("You got a cookie");
      this.setState({ showAlert: false });
    }
  }

  render() {
    return (
      <>
        <h2>Cookie counter!</h2>
        <button onClick={this.incrementClickCount}>Increase number</button>
        <p>You have clicked {this.state.clicks} times</p>
        {this.state.clicks >= 10 ? (
          <p>You currently have a 🍪</p>
        ) : (
          <p>Click 10 time for a cookie!</p>
        )}
      </>
    );
  }
}
export default ClassComponentBox;
