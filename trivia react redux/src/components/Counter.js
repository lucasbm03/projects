import React, { Component } from 'react';

const ONE_SECOND = 1000;
const MIN_SECOND = 1;

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      seconds: 30,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        seconds: prevState.seconds - 1,
      }));
    }, ONE_SECOND);
  }

  componentDidUpdate(_prevProps, prevState) {
    if (prevState.seconds === MIN_SECOND) {
      clearInterval(this.interval);
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { seconds } = this.state;
    return (
      <div>
        <span id="countdown" className="countdown">{ seconds }</span>
      </div>
    );
  }
}

export default Counter;
