/* eslint-disable import/extensions */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/components/container/App.jsx';

// eslint-disable-next-line no-undef
const appContainer = document.querySelector('#app');
if (appContainer) {
  // eslint-disable-next-line react/jsx-filename-extension
  ReactDOM.render(<App />, appContainer);
}
