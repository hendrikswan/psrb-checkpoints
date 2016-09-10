/**
*
* Topic
*
*/

import React from 'react';
import styles from './styles.css';

function Topic({ topic, selectTopic }) {
  return (
    <div className={styles.topic}>
      <a onClick={() => selectTopic(topic)}>
        {topic.name}
      </a>
    </div>
  );
}

Topic.propTypes = {
  topic: React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired,
  }),
  selectTopic: React.PropTypes.func.isRequired,
};


export default Topic;
