/**
*
* HelloWorld
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import styles from './styles.css';

function HelloWorld() {

  return (
    <div className={styles.helloWorld}>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

export default HelloWorld;
