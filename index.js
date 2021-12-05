/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import App from './App';

import {name as appName} from './app.json';
import {store, persiStore} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';

const RNRedux = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persiStore}>
      <App />
    </PersistGate>
  </Provider>
);

AppRegistry.registerComponent(appName, () => RNRedux);
