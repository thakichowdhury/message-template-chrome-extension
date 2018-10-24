import React, { Component } from 'react';
import axios from 'axios';

import Input from '../presentational/Input';
import Letter from '../presentational/Letter';
import HomeScreen from '../presentational/HomeScreen';
import LetterTemplate from './LetterTemplate';

import { copyTextToClipboard, findTemplatePhrases } from '../../helpers';

class App extends Component {
  constructor() {
    super();

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.saveCoverLetterTemplate = this.saveCoverLetterTemplate.bind(this);

    this.state = {
      user: '',
      templatePhrases: [],
      currentLetter: '',
      currentCoverLetterTemplateName: '',
      currentCoverLetterTemplateBody: '',
    }
  }

  handleUsernameChange(event) {
    const { value } = event.target;
    this.setState({
      user: value,
    })
  }

  handleChange(event) {
    const { name, value } = event.target;

    const change = {};
    change[name] = value;

    this.setState(change)
  }

  onSubmit() {
    this.setState({
      currentLetter: '',
    })
    const { company, values, tech } = this.state;

    axios.post('/makeLetter', {
        company,
        values,
        tech,
      })
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
      company,
      values,
      tech,
      currentLetter,
      templatePhrases,
      currentCoverLetterTemplateName,
      currentCoverLetterTemplateBody,
    } = this.state;

    return (
      <div>
        Fill in
      </div>
    )
  }
}

export default App;
