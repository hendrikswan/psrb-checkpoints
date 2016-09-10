/**
*
* Navigation
*
*/

import React from 'react';
import styles from './styles.css';
import Topic from '../Topic';

function Navigation({ topics }) {
  const topicNodes = topics.map(t => (
    <Topic {...t} key={t.description} />
  ));

  return (
    <div className={styles.navigation}>
      {topicNodes}
    </div>
  );
}

Navigation.propTypes = {
  topics: React.PropTypes.arrayOf(React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired,
  })).isRequired,
};

export default Navigation;
