import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from '../Components/App';

const initialState = {
  isNewUser: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'INITIATE_USER':
      return {isNewUser: false};
    default:
      return state;
  }
};

const store = createStore(reducer, initialState);

export default function AppWithStore() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
