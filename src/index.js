import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './store';

import App from './App';

const AppProvider = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default AppProvider;

ReactDOM.render(<AppProvider />, document.getElementById('root'));
