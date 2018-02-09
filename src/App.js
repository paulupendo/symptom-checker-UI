import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PatientScreen from './components/PatientScreen';
import './App.css';

const FourOhFour = () => <h4>404</h4>;
const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={PatientScreen} />
      <Route component={FourOhFour} />
    </Switch>
  </BrowserRouter>
);

export default App;
