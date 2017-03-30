
/**
 *
 * FrameContainer Redux Container
 *
 */

import React, { Component, PropTypes } from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectName } from './selectors';
import { sampleAction } from './actions';

class FrameContainer extends Component { // eslint-disable-line react/prefer-stateless-function

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
      <div style={{ padding: '2em' }}>
        {this.props.children}
      </div>
      ); // eslint-disable-line
  }
}

FrameContainer.propTypes = {
  dispatch: PropTypes.func,
  name: PropTypes.string,
  exampleProp: PropTypes.string,
  children: PropTypes.node,
};

FrameContainer.defaultProps = {
  exampleProp: '',
  children: null,
};

const mapStateToProps = createStructuredSelector({
  name: selectName(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FrameContainer);
