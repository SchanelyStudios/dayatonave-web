import React from "react";
import ClassNames from "classnames";

import SmartLink from "./smart-link";

class Button extends React.Component {

  constructor(props, state) {
    super(props, state);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (this.props.action) {
      this.props.action(e);
    }
  }

  render() {
    let classes = [
      this.props.className,
      {
        "btn--flat": this.props.flat,
        [`btn--${this.props.color}`]: this.props.color,
      }
    ];

    if (this.props.href || this.props.path) {
      let classNames = ClassNames("btn", classes);

      return (
        <SmartLink
          href={this.props.href}
          path={this.props.path}
          className={classNames}
        >
          {this.props.children}
        </SmartLink>
      );
    } else {
      let classNames = ClassNames(classes);
      return (
        <button onClick={this.handleClick} className={classNames}>
          {this.props.children}
        </button>
      );
    }
  }
};

export default Button;
