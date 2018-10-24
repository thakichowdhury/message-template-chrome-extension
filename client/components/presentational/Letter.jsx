import React from 'react';

import Input from './Input';
import styles from '../styles/Letter.css';

const Letter = ({ company, values, tech, currentLetter, handleChange, copyTextToClipboard }) => (
  <div>
    <Input name='company' placeholder='company' value={company} handleChange={handleChange} />
    <Input name='values' placeholder='values' value={values} handleChange={handleChange} />
    <Input name='tech' placeholder='tech' value={tech} handleChange={handleChange} />
    {
      currentLetter !== '' &&
      <textarea
        name="currentLetter"
        defaultValue={currentLetter}
        style={styles.letter_template}
        className="currentLetter"
        onClick={copyTextToClipboard('currentLetter')}
      />
    }
  </div>
);

export default Letter;
