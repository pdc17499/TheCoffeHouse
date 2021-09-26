import React, {Component} from 'react';

import {createStore} from 'redux';
import {Provider} from 'react-redux';

import allReducers from './src/reducers';

import {AppNavigation} from './src/appNavigation/router';

// import Home from "./screens/Home";

let store = createStore(allReducers);

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}
