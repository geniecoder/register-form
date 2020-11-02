/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';


import { Provider } from 'react-redux';
import persist from './config/store';
import RegisterForm from './screen/RegisterForm';
import Home from './screen/Home';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { PersistGate } from 'redux-persist/integration/react'

const Stack = createStackNavigator();

const AuthStack = createStackNavigator();
const AppStack = createStackNavigator();

const persistStore = persist();

const App = () => {
  return (
    <Provider store={persistStore.store}>
      <PersistGate loading={null} persistor={persistStore.persistor}>
        <NavigationContainer>
          <Stack.Navigator 
            initialRouteName='RegisterForm'
            screenOptions={{
              headerShown: false
            }}>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='RegisterForm' component={RegisterForm} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};



export default App;
