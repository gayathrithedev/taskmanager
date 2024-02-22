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
import StoreProvider from './src/store/StoreProvider';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView style={styles?.safeArea}>
      <NavigationContainer>
        <StoreProvider>
          <SafeAreaView style={styles.safeArea}>
            <HomeNav />
          </SafeAreaView>
        </StoreProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});

export default App;
