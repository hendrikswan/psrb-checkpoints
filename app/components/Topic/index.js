/**
*
* Topic
*
*/

import React from 'react';


import styles from './styles.css';

function Topic({ description }) {
  return (
    <div className={styles.topic}>
      description: {description}
    </div>
  );
}

Topic.propTypes = {
  description: React.PropTypes.string.isRequired,
};


export default Topic;
