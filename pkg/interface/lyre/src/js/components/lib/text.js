import React, { Component } from 'react';
import classnames from 'classnames';

export class Text extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let style = this.props.style.reduce((acc, el) => {
      let res = parseFlex(acc, el);
      if (res === acc) {
        res = parseLayout(acc, el);
      }
      if (res === acc) {
        res = parseTypography(acc, el);
      }
      if (res === acc) {
        res = parseBGColor(acc, el);
      }
      if (res === acc) {
        res = parseBorder(acc, el);
      }
      return res;
    }, {});

    let lines = this.props.body.split('\n').map((line, i) => {
      return (
        <p key={i}>
          {line}
        </p>
      );
    });
    return (
      <div style={style}>
        {lines}
      </div>
    );
  }
}
