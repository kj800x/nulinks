import React, {Component} from 'react';
import ReactDom from 'react-dom';

import "./Result.css";

export default class Result extends Component {

  componentDidUpdate() {
    if (this.props.selected) {
      ReactDom.findDOMNode(this).scrollIntoView({"behavior": "instant", "block": "nearest", "inline": "nearest"});
    }
  }

  render() {
    return (
      <li className={"result" + (this.props.selected ? " selected" : "")}>
        <div className="resultContents">
          <div className="resultHeader">
            <a className="resultTitle" href={this.props.result.value.target}>
              {this.props.result.value.title}
            </a>
            <div className="resultGoLink">
              go {this.props.result.representativeKeyword}
            </div>
          </div>
          <div className="resultDescription">
            {this.props.result.value.description}
          </div>
        </div>
      </li>
    )
  }
}