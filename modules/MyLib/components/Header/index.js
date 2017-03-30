/**
 *
 * Header
 *
 */

import React, { Component, PropTypes } from 'react';

class Header extends Component { // eslint-disable-line react/prefer-stateless-function

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
        <span>Header</span>
      </div>
      ); // eslint-disable-line
  }
}

Header.propTypes = {
  exampleProp: PropTypes.string,
};
Header.defaultProps = {
  exampleProp: '',
};

export default Header;
