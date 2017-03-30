
/**
 *
 * ToolBoxContainer Redux Container
 *
 */

import React, { Component, PropTypes } from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectName } from './selectors';
import { sampleAction } from './actions';

class ToolBoxContainer extends Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.handleEvent = this.handleEvent.bind(this);
    this.state = {
      exampleValue: '',
    };
  }

  handleEvent(e) {
    e.preventDefault();
    e.stopPropagation();
    const {dispatch, name} = this.props; // eslint-disable-line
    dispatch(sampleAction(name));
  }

  render() {
    const {exampleValue} = this.state; // eslint-disable-line
    const {exampleProp} = this.props; // eslint-disable-line
    return (
      <div>
        <span>Toolbox Redux Container</span>
      </div>
      ); // eslint-disable-line
  }
}

ToolBoxContainer.propTypes = {
  dispatch: PropTypes.func,
  name: PropTypes.string,
  exampleProp: PropTypes.string,
};

ToolBoxContainer.defaultProps = {
  exampleProp: '',
};

const mapStateToProps = createStructuredSelector({
  name: selectName(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ToolBoxContainer);
