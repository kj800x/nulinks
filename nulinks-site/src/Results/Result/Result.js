import React, { Component } from "react";
import ReactDom from "react-dom";

import { A } from "../../util/A";

import "./Result.css";

export default class Result extends Component {
  componentDidUpdate() {
    if (this.props.selected) {
      ReactDom.findDOMNode(this).scrollIntoView({
        behavior: "instant",
        block: "nearest",
        inline: "nearest"
      });
    }
  }

  render() {
    return (
      <li className={"result" + (this.props.selected ? " selected" : "")}>
        <A className="resultContents" href={this.props.result.value.target}>
          <div className="resultHeader">
            <span className="resultTitle">{this.props.result.value.title}</span>
            <div className="resultGoLink">
              nu {this.props.result.representativeKeyword}
            </div>
          </div>
          <div className="resultDescription">
            {this.props.result.value.description}
          </div>
        </A>
      </li>
    );
  }
}
