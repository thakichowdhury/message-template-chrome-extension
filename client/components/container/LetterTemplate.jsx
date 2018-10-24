import React, { Component } from 'react';

import styles from '../../styles/Letter.css';

import Input from '../presentational/Input';
import Button from '../presentational/Button';
import Letter from '../presentational/Letter';

class LetterTemplate extends Component {
  constructor(props) {
    super(props);
  }

  renderInput (variable, handleChange) {
    return (
      <Input
        name={variable.name}
        key={variable.id}
        data={variable.id}
        value={variable.value}
        handleChange={handleChange}
      />
    )
  }

  render () {
    const {
      templatePhrases,
      letterInfo,
      currentLetter,
      handleChange,
      copyTextToClipboard,
      handleClick,
    } = this.props;
    return (
      <div>
        {templatePhrases.map((variable) => this.renderInput(variable, handleChange))}
        {
          currentLetter !== '' &&
          <Letter
            info={letterInfo}
            value={currentLetter}
            handleClick={copyTextToClipboard}
          />
        }
        <Button children='Submit' handleClick={handleClick} />
      </div>
    )
  }
};

export default LetterTemplate;
