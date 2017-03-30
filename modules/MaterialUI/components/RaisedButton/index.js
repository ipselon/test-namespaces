/**
 *
 * RaisedButton
 *
 */

import React, { Component, PropTypes } from 'react';

import {RaisedButton as MUIButton} from 'material-ui';

class RaisedButton extends Component { // eslint-disable-line react/prefer-stateless-function

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
      <MUIButton label="Default" />
    ); // eslint-disable-line
  }
}

RaisedButton.propTypes = {
  exampleProp: PropTypes.string,
};
RaisedButton.defaultProps = {
  exampleProp: '',
};

export default RaisedButton;
