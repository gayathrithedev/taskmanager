import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// screens
import Home from '../screens/home';
import Create from '../screens/create';

const Stack = createNativeStackNavigator();

const HomeNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Create" component={Create} />
    </Stack.Navigator>
  );
};

export default HomeNav;
