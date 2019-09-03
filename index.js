/**
 * @format
 */

import { AppRegistry } from 'react-native';
import React from 'react';
import App from '@App/App';
import { name as leoChat } from './app.json';
import { Provider } from 'react-redux';
import configureStore from '@App/Store';
const store = configureStore();

const RNRedux = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

AppRegistry.registerComponent(leoChat, () => RNRedux);