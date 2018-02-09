import React from 'react';
import { Input, Button } from 'semantic-ui-react';

const styles = {
  btn: {
    marginTop: '10px',
  },
  patiendInfo: {
    marginRight: '10px',
  },
  info: {
    width: '8.5em',
    marginRight: '80px',
  },
};
const Patient = props => {
  return (
    <div>
      <h3>Input Patient Id here to begin the diagnosis process</h3>
      <Input
        label={{ basic: true, content: 'Id' }}
        labelPosition="left"
        placeholder="Enter id..."
        onChange={props.onChange}
      />{' '}
      <br />
      <Button
        content="Submit"
        style={styles.btn}
        primary
        onClick={props.handleSubmit}
      />
      <h4>Patient info</h4>
      <Input
        label={{ basic: true, content: 'Age' }}
        labelPosition="left"
        disabled
        style={styles.info}
        value={props.age !== undefined ? props.age : 'AGE'}
      />{' '}
      <Input
        style={styles.info}
        label={{ basic: true, content: 'Gender' }}
        labelPosition="left"
        disabled
        value={props.gender !== undefined ? props.gender : 'GENDER'}
      />
    </div>
  );
};

export default Patient;
