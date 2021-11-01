import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {OnboardingNavigator} from './src/Onboarding';
import {KYCNavigator} from './src/KYC';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const KYCStack = createStackNavigator();
const CardOnboardingStack = createStackNavigator();

const AppStack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{headerShown: false}}>
        <AppStack.Screen name="Onboarding" component={OnboardingNavigator} />
        <AppStack.Screen name="KYC" component={KYCNavigator} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
