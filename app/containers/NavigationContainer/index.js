/*
 *
 * NavigationContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectNavigationContainer from './selectors';
import Navigation from '../../components/Navigation';
import { requestTopics, selectTopic, toggleDrawer, startLogin } from './actions';

export class NavigationContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    this.props.requestTopics();
  }

  render() {
    return (
      <Navigation {...this.props} />
    );
  }
}

NavigationContainer.propTypes = {
  requestTopics: React.PropTypes.func.isRequired,
};

const mapStateToProps = selectNavigationContainer();

function mapDispatchToProps(dispatch) {
  return {
    requestTopics: () => dispatch(requestTopics()),
    selectTopic: (topic) => dispatch(selectTopic(topic)),
    toggleDrawer: () => dispatch(toggleDrawer()),
    startLogin: () => dispatch(startLogin()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationContainer);
