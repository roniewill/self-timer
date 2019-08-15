import React, { Component } from "react";

import { BoxTimer, ImageTimer, ShowTimer, BoxButtons, Button } from "./style";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 0,
      btnTitle: "start"
    };

    this.timer = null;
    this.startTimer = this.startTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }

  startTimer() {
    let state = this.state;
    if (this.timer !== null) {
      clearInterval(this.timer);
      this.timer = null;
      state.btnTitle = "start";
    } else {
      this.timer = setInterval(() => {
        state.timer += 0.1;
        this.setState(state);
      }, 100);
      state.btnTitle = "pause";
    }
    this.setState(state);
  }

  resetTimer() {
    this.setState({ timer: 0 });
  }

  render() {
    let state = this.state;
    return (
      <BoxTimer>
        <ImageTimer src={require("../../assets/cronometro.png")} />
        <ShowTimer>{this.state.timer.toFixed(1)}</ShowTimer>
        <BoxButtons>
          <Button onClick={this.startTimer}>{this.state.btnTitle}</Button>
          <Button
            onClick={this.resetTimer}
            disabled={state.timer === 0 || state.btnTitle === "pause"}
          >
            clear
          </Button>
        </BoxButtons>
      </BoxTimer>
    );
  }
}
