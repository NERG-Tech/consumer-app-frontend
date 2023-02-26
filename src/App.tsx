/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import 'react-native-gesture-handler';
import React, {memo} from 'react';
import {Provider} from 'react-redux';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import {store} from './redux/store';
import {AuthProvider} from './contexts/AuthProvider';
import {AppNavigator} from './navigation';
import {ToastProvider} from 'react-native-toast-notifications';

const persistor = persistStore(store);

function App(): JSX.Element {
  return (
    <AuthProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ToastProvider textStyle={{fontSize: 16}}>
            <AppNavigator />
          </ToastProvider>
        </PersistGate>
      </Provider>
    </AuthProvider>
  );
}

export default memo(App);
