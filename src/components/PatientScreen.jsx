import React, { Component } from 'react';
import { Segment, Menu } from 'semantic-ui-react';
import axios from 'axios';
import Patient from './PatientData';
import SymptomsScreen from './Symptoms';

const styles = {
  screen: {
    height: '100%',
  },
};

export default class PatientScreen extends Component {
  state = {
    patient_id: null,
    patient_info: {},
  };

  handleSubmit = () => {
    if (this.state.patient_id !== null) {
      const form = new FormData();
      form.append('id', this.state.patient_id);
      const url = 'http://127.0.0.1:5000/patientInfo';
      axios
        .post(url, form)
        .then(res => {
          this.setState({ patient_info: res.data.result });
        })
        .catch(err => console.log('THIS ERROR OCCURRED -->', err));
    }
  };

  onChange = e => {
    this.setState({ patient_id: e.target.value });
  };

  render() {
    return (
      <div className="container">
        <Segment style={styles.screen}>
          <Menu>
            <Menu.Item header>AlemHealth Symptom-checker </Menu.Item>
          </Menu>
          <div>
            <Patient
              onChange={this.onChange}
              handleSubmit={this.handleSubmit}
              {...this.state.patient_info}
            />
            <SymptomsScreen />
          </div>
        </Segment>
      </div>
    );
  }
}
