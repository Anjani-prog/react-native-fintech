import React, {useState, useEffect} from 'react';
import {LogBox, StatusBar} from 'react-native';
import Splash from '@screens/Splash';
import Colors from '../constants/Colors';
import Routes from './NavStack';

export default function Navigation({}) {
  const [isSplash, setisSplash] = useState(true);
  LogBox.ignoreAllLogs(true);
  if (isSplash) {
    return (
      <>
        {Platform.OS === 'android' && (
          <StatusBar hidden={true} animated={true} />
        )}
        <Splash setisSplash={setisSplash} />
      </>
    );
  } else {
    return (
      <>
        {Platform.OS === 'android' && (
          <StatusBar backgroundColor={Colors.BGCOLOR} animated={true} />
        )}
        <Routes />
      </>
    );
  }
}
