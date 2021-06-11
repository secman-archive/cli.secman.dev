import React, { Component, Fragment } from "react";
import Fade from "react-reveal/Fade";

export default class FO extends Component {
  render() {
    return (
      <Fragment>
        <div style={styles.block}>
          <Fade top>{this.props.children}</Fade>
        </div>
      </Fragment>
    );
  }
}

const styles = {
  block: {
    display: "flex",
    width: "100%",
    height: "100%",
  }
};
