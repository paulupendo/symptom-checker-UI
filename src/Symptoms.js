import React, { Component } from "react";
import "./App.css";
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardTextfrom,
  CardText
} from "material-ui";

class Symptoms extends React.Component {
  render() {
    return (
      <Card>
        <CardTitle title="Symptom Diagnosis" />
        <CardHeader
          title="Symptom Checker"
          subtitle="Enter symptom to start diagnosis"
        />
      </Card>
    );
  }
}

export default Symptoms;