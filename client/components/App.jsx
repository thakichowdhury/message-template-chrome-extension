import React, { Component } from 'react';
import axios from 'axios';

import Input from './Input';
import Letter from './Letter';

import { copyTextToClipboard } from '../helpers';

class App extends Component {
  constructor() {
    super();

    this.handleCompanyChange = this.handleCompanyChange.bind(this);
    this.handleValuesChange = this.handleValuesChange.bind(this);
    this.handleTechChange = this.handleTechChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.saveToDatabase = this.saveToDatabase.bind(this);
    this.copyTextToClipboard = this.copyTextToClipboard.bind(this);

    this.state = {
      company: '',
      values: '',
      tech: '',
      currentLetter: '',
    }
  }

  handleCompanyChange(event) {
    const company = event.target.value;
    this.setState({
      company: company,
    })
  }

  handleValuesChange(event) {
    const values = event.target.value;
    this.setState({
      values: values,
    })
  }
  
  handleTechChange(event) {
    const tech = event.target.value;
    this.setState({
      tech: tech,
    })
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

  saveToDatabase() {
    const { company, currentLetter } = this.state;

    axios.post('/save', {
      company,
      currentLetter,
    })
    .then(res => {
      alert('saved!')
    })
    .catch(err => {
      console.log(err);
    })
  }

  copyTextToClipboard() {
    var letter = document.getElementsByClassName('letter')[0];
    letter.select();
    document.execCommand('copy');
  }

  render () {
    const {
      company,
      values,
      tech,
      currentLetter,
    } = this.state;

    return (
      <div>
        <Input placeholder="Company Name" value={company} handleChange={this.handleCompanyChange} />
        <Input placeholder="Company Values" value={values} handleChange={this.handleValuesChange} />
        <Input placeholder="Relevant Tech" value={tech} handleChange={this.handleTechChange} />
        <button onClick={this.onSubmit}>Submit</button>
        <button onClick={this.saveToDatabase}>Save</button>
        <Letter letter={currentLetter} copy={this.copyTextToClipboard} />
      </div>
    )
  }
}

export default App;
