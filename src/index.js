import React from 'react';
import { render } from 'react-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import injectTapEventPlugin from "react-tap-event-plugin";
import App from "./containers/App";
import rootReducer from "./reducers";
import { getTodosIfNeeded } from "./actions";

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(rootReducer)

store.dispatch(getTodosIfNeeded())
injectTapEventPlugin();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
