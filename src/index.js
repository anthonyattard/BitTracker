import React from "react";
import { render } from "react-dom";

import { Header } from "./header";
import { Footer } from "./footer";
import { Portfolio } from "./portfolio";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class App extends React.Component {
  render() {
    return (
      <div style={styles}>
        <Header title="BitTracker" />
        <Portfolio />
        <Footer name="(your name)" />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
