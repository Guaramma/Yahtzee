import React, { Component } from "react";
import "./RuleRow.css";

class RuleRow extends Component {
  render() {
    return (
      <tr
        className={
          this.props.score >= 0
            ? "RuleRow RuleRow-disabled"
            : "RuleRow RuleRow-active"
        }
        onClick={this.props.score >= 0 ? null : this.props.doScore}
      >
        <td className="RuleRow-name">{this.props.name}</td>
        {this.props.score >= 0 ? (
          <td className="RuleRow-score">{this.props.score}</td>
        ) : (
          <td className="RuleRow-description">{this.props.description}</td>
        )}
      </tr>
    );
  }
}

export default RuleRow;
