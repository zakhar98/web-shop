import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ProductComponent from './components/Product'

ReactDOM.render(<ProductComponent />, document.getElementById('root'));
registerServiceWorker();
