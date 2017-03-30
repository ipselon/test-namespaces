
/**
 *
 * MUIToolbarContainer Redux Container
 *
 */

import React, { Component, PropTypes } from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectName } from './selectors';
import { sampleAction } from './actions';
import { ThemeContainer, FlatButton, RaisedButton } from 'modules/MaterialUI';
import Header from 'modules/MyLib/components/Header';

class MUIToolbarContainer extends Component { // eslint-disable-line react/prefer-stateless-function

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
        <Header></Header>
        <ThemeContainer>
          <FlatButton
                      primary={true}
                      label="Primary"
                      secondary={false}
          ></FlatButton>
          <FlatButton
                      primary={false}
                      label="Primary"
                      secondary={true}
          ></FlatButton>
          <RaisedButton></RaisedButton>
        </ThemeContainer>
      </div>
      ); // eslint-disable-line
  }
}

MUIToolbarContainer.propTypes = {
  dispatch: PropTypes.func,
  name: PropTypes.string,
  exampleProp: PropTypes.string,
};

MUIToolbarContainer.defaultProps = {
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

export default connect(mapStateToProps, mapDispatchToProps)(MUIToolbarContainer);
