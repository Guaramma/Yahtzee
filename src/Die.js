import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  state = {
    class: "fas fa-dice-",
    dice: ["one", "two", "three", "four", "five", "six"]
  };

  render() {
    const diceClass = this.state.class + this.state.dice[this.props.val - 1];
    const dieClass = () => {
      if (this.props.locked) {
        return "Die Die-locked";
      } else if (this.props.rolling) {
        return "Die Die-rolling";
      } else {
        return "Die";
      }
    };

    return (
      <button
        className={dieClass()}
        // style={{ backgroundColor: this.props.locked ? "grey" : "black" }}
        onClick={this.props.rollsLeft > 0 ? this.props.handleClick : null}
      >
        <i className={diceClass}></i>
      </button>
    );
  }
}

export default Die;
