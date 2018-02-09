import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import './index.css';

const MOUNT_NODE = document.getElementById('root');

ReactDOM.render(<App />, MOUNT_NODE);

registerServiceWorker();
