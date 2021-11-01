import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {PhoneVerificationNavigator} from './PhoneVerification';
import {KYCNavigator} from './KYC';

const OnboardingStack = createStackNavigator();

export const OnboardingNavigator = () => {
  return (
    <OnboardingStack.Navigator screenOptions={{headerShown: false}}>
      <OnboardingStack.Screen
        name="PhoneVerification"
        component={PhoneVerificationNavigator}
      />
      <OnboardingStack.Screen name="KYC" component={KYCNavigator} />
    </OnboardingStack.Navigator>
  );
};
