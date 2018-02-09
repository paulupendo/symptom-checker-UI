import React, { Component } from 'react';
import { Segment, Input, Radio, Button } from 'semantic-ui-react';
import axios from 'axios';

const styles = {
  segment: {
    height: '430px',
    marginTop: '3em',
    position: 'relative',
  },
  symptom_input: {
    width: '50em',
    marginTop: '1em',
  },
  radio: {
    marginRight: '10px',
  },
  next_btn: {
    position: 'absolute',
    left: '90%',
    top: '78%',
  },
};

let url;

export default class SymptomsScreen extends Component {
  state = {
    symptom_results: {},
    symptom: null,
    value: null
  };
  
  handleChange = e => {
    if (e.target.value.length >= 3) {
      this.setState({ symptom: e.target.value });
      const form = new FormData();
      url = 'http://127.0.0.1:5000/retrievesymptoms';
      form.append('symptom', this.state.symptom);
      axios
        .post(url, form)
        .then(res => {
          this.setState((prevState, props) => {
            return {
              symptom_results: res.data.result,
            };
          });
        })
        .catch(err => console.log('THIS ERROR OCCURED --> ', err));
    } else if (e.target.value.length == 0) {
      this.setState((prevState, props) => {
        return {
          symptom: null,
          symptom_results: {},
        };
      });
    }
  };

  handleRadioChange = (e, { value }) => {
    this.setState({ value });
  };

  onClick = () => {
      if(this.state.value !== null) {
          const form = new FormData()
          form.append('symptom_id', this.state.value)
          url = 'http://127.0.0.1:5000/interview'
      }
  } /** work in progress */

  render() {
    return (
      <Segment color="blue" style={styles.segment}>
        <h3>Hi there! Tell us how you feel:</h3>
        <div>
          <Input
            style={styles.symptom_input}
            label={{ basic: true, content: 'Symptoms' }}
            labelPosition="left"
            placeholder="Enter Symptoms here..."
            onChange={this.handleChange}
          />
          <br />
          {this.state.symptom !== null ? (
            <h5> Choose the symptom that best suites how you feel </h5>
          ) : null}
          {this.state.symptom !== null
            ? [...this.state.symptom_results].map(symptom => {
                return (
                  <Radio
                    style={styles.radio}
                    key={symptom.id}
                    label={symptom.label}
                    name="radioGroup"
                    value={symptom.id}
                    checked={this.state.value === `${symptom.id}`}
                    onChange={this.handleRadioChange}
                  />
                );
              })
            : null}
          <div style={styles.next_btn}>
            <Button content="Next" primary />
          </div>
        </div>
      </Segment>
    );
  }
}
