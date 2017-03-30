/**
 *
 * Button
 *
 */

import React, { Component, PropTypes } from 'react';

class Button extends Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      exampleValue: '',
    };
  }

  render() {
    const {exampleValue} = this.state; // eslint-disable-line
    const {exampleProp} = this.props; // eslint-disable-line
    return (
      <div>
        <span>Button</span>
      </div>
      ); // eslint-disable-line
  }
}

Button.propTypes = {
  exampleProp: PropTypes.string,
};
Button.defaultProps = {
  exampleProp: '',
};

export default Button;
