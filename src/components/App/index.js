import React, { Component } from "react";

import { BoxTimer, ImageTimer, ShowTimer, BoxButtons, Button } from "./style";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 0
    };
  }
  render() {
    return (
      <BoxTimer>
        <ImageTimer src={require("../../assets/cronometro.png")} />
        <ShowTimer>{this.state.timer.toFixed(1)}</ShowTimer>
        <BoxButtons>
          <Button>iniciar</Button>
          <Button>zerar</Button>
        </BoxButtons>
      </BoxTimer>
    );
  }
}
