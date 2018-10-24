import React from 'react';

import styles from '../../styles/Letter.css';

import Button from '../presentational/Button';

const Letter = ({ info: name, value, handleClick=() => {throw 'error'} }) => (
  <div>
      <textarea
        name={name}
        id={name}
        defaultValue={value}
        className={styles.letter_template}
      />
      <Button handleClick={() => handleClick(name)} children="Copy" />
  </div>
);

export default Letter;
