/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import HomeNav from './src/navigation';
import {Provider} from 'react-redux';
import store from './src/store';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <SafeAreaView style={styles.safeArea}>
          <HomeNav />
        </SafeAreaView>
      </Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});

export default App;
