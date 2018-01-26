import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

import reducer, { State } from './reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore<State>(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
