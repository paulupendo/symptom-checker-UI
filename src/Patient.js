import React, { Component } from "react";
import "./App.css";
import Symptoms from "./Symptoms"
import {
  TextField,
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardTextfrom,
  CardText,
  RaisedButton
} from "material-ui";

const styles = {
  text: {
    underlineStyle: "rgb(21, 169, 225)"
  },
  label: {
    backgroundColor: "rgb(21, 169, 225)"
  }
};
class Patient extends React.Component {
  render() {
    return (
      <div className="bodyPatient">
        <Card>
          <CardTitle title="Enter patient ID." />
          <CardText>
            <TextField hintText="Patient ID" style={styles.text} />
            <div className="button">
              <RaisedButton
                backgroundColor="rgb(21, 169, 225)"
                labelColor="#fff"
                label="Search Patient"
              />
            </div>
          </CardText>
        </Card>
      <Symptoms />
      </div>
      
    );
  }
}

export default Patient;
