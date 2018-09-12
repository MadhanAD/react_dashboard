import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {HomeComponent} from './components/home'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<HomeComponent />, document.getElementById('root'));
registerServiceWorker();
