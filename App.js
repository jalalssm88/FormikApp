/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import HomeScreen from './src/containers/Home/';




const App: () => React$Node = () => {
  return (
    <>
      <View style={{paddingHorizontal:20, paddingTop:20}}>
        <HomeScreen />
      </View>
    </>
  );
};


export default App;
