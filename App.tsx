/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
} from 'react-native';
import Storage from './src/views/AsyncStorage';



function App(): React.JSX.Element {
 

  return (
    <SafeAreaView >
      
      <Storage/>
    </SafeAreaView>
  );
}



export default App;
