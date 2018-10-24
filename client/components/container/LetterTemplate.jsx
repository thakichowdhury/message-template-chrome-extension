import React, { Component } from 'react';

import Input from './Input';
import styles from '../styles/Letter.css';

class LetterUpdater extends Component {
  constructor({ templatePhrases, templateName, templateBody, handleSubmit }) {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.templatePhrases = templatePhrases;
    this.templateName = templateName;
    this.templateBody = templateBody;
    this.handleSubmit = handleSubmit;

    this.phrases = templatePhrases.map(phrase =>
      (
        <Input name={phrase} placeholder={phrase} value={this.state[phrase]} handleChange={this.handleChange} />
      )
    );
  }

  componentDidMount () {
    this.templatePhrases.forEach(phrase => {
      const state = {};
      state[phrase] = '';
      this.setState(state);
    })
  }

  handleChange(event) {
    const { name, value } = event.target;
    const change = {};

    change[name] = value;

    this.setState(change)
  }


  render () {
    return (
      <div>
        <Input
          name='currentCoverLetterTemplateName'
          placeholder='Name of Cover Letter'
          value={this.templateName}
          handleChange={this.handleChange}
        />
        {this.phrases}
        <textarea
          name='currentCoverLetterTemplateBody'
          defaultValue={this.templateBody}
          className={styles.letter_template}
          onChange={this.handleChange}
        />
        <br />
        <button onClick={this.handleSubmit} >Save</button>
      </div>
    )
  }
};

export default LetterUpdater;
