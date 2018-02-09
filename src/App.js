import React, { Component } from "react";
import ReactDOM from "react-dom";
import AppBar from "material-ui/AppBar";
import Patient from "./Patient";
import "./index.css";

const styles = {
  appbar: {
    backgroundColor: "rgb(21, 169, 225)",
    textAlign: "center"
  }
};

class App extends React.Component {
  render() {
    return (
      <div className="body">
        <AppBar
          style={styles.appbar}
          title="Symptom Checker"
          showMenuIconButton={false}
        />
        
        <Patient />
      </div>
    );
  }
}

export default App;
