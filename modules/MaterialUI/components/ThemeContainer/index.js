/**
 *
 * ThemeContainer
 *
 */

import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class ThemeContainer extends Component { // eslint-disable-line react/prefer-stateless-function

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
        <MuiThemeProvider>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '1em' }}>
            {this.props.children}
          </div>
        </MuiThemeProvider>
      ); // eslint-disable-line
  }
}

ThemeContainer.propTypes = {
  exampleProp: PropTypes.string,
  children: PropTypes.node,
};
ThemeContainer.defaultProps = {
  exampleProp: '',
  children: null,
};

export default ThemeContainer;
