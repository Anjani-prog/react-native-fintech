import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {LogBox, StatusBar} from 'react-native';
import Routes from './src/navigation';

import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import {NavigationContainer} from '@react-navigation/native';
import FlashMessage from 'react-native-flash-message';

export default function SplashSceen({}) {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Routes />
        <FlashMessage />
      </Provider>
    </NavigationContainer>
  );
}
