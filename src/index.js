import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import todoApp from './reducers';
import App from './components/App';

const initialState = {
  visibilityFilter: 'SHOW_ALL'
}

const store = createStore(todoApp, initialState, applyMiddleware(thunk));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
