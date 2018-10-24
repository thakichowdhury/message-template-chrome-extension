import React, { Component } from 'react';
import axios from 'axios';

import { copyTextToClipboard, findTemplatePhrases } from '../../helpers';
import { sampleLetterTemplate, sampleTemplatePhrases } from '../../sample_data/sampleLetterTemplate';

import LetterTemplate from './LetterTemplate';

class App extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.saveCoverLetterTemplate = this.saveCoverLetterTemplate.bind(this);

    this.state = {
      user: '',
      templatePhrases: sampleTemplatePhrases,
      currentLetter: '',
      currentCoverLetterTemplateName: '',
      currentCoverLetterTemplateBody: '',
    }
  }

  handleChange (event) {
    const { name, value } = event.target;

    const change = {};
    change[name] = value;

    this.setState(change)
  }

  handleInputChange (e) {
    const { name, value, dataset: {key} } = e.target;
    const { templatePhrases } = this.state;
    console.log(templatePhrases);
    templatePhrases[key].value = value;
    this.setState({
      templatePhrases: templatePhrases
    })
  }

  onSubmit() {
    this.setState({
      currentLetter: '',
    })
    const { templatePhrases } = this.state;

    axios.post('/makeLetter', templatePhrases)
      .then(res => {
        const { status, letter } = res.data;
        console.log(status);

        this.setState({
          currentLetter: letter,
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  saveCoverLetterTemplate() {
    const {
      user,
      currentCoverLetterTemplateName,
      currentCoverLetterTemplateBody,
    } = this.state;

    const phrases = {
      templatePhrases: findTemplatePhrases(currentCoverLetterTemplateBody)
    };

    this.setState(phrases);

    axios.post('/saveLetter', {
      user,
      currentCoverLetterTemplateName,
      currentCoverLetterTemplateBody,
    })
    .then(res => {
      alert('saved!')
    })
    .catch(err => {
      console.log(err);
    })
  }

  render () {
    const {
      user,
      currentLetter,
      templatePhrases,
    } = this.state;

    return (
      <div>
        <LetterTemplate
          templatePhrases={templatePhrases}
          letterInfo={'currentLetter'}
          currentLetter={currentLetter}
          handleChange={this.handleInputChange}
          copyTextToClipboard={copyTextToClipboard}
          handleClick={this.onSubmit}
        />
      </div>
    )
  }
}

export default App;
