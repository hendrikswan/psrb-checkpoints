/**
*
* Navigation
*
*/

import React from 'react';
import styles from './styles.css';
import Topic from '../Topic';
import AppBar from '../AppBar';

function Navigation({ topics, selectTopic, toggleDrawer }) {
  const topicNodes = topics.map(t => (
    <Topic
      key={t.description}
      selectTopic={selectTopic}
      topic={t}
    />
  ));

  return (
    <div className={styles.navigation}>
      <AppBar
        toggleDrawer={toggleDrawer}
      />
      {topicNodes}
    </div>
  );
}

Navigation.propTypes = {
  topics: React.PropTypes.arrayOf(React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired,
  })).isRequired,
  selectTopic: React.PropTypes.func.isRequired,
  toggleDrawer: React.PropTypes.func.isRequired,
};

export default Navigation;
