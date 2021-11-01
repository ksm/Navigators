import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'turquoise',
  },
});

const OnboardingStack = createStackNavigator();

const OnboardingOneScreen = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <Text>First Onboarding Screen</Text>
      <Button
        title="Continue onboarding..."
        onPress={() => navigation.navigate('OnboardingTwo')}
      />
    </View>
  );
};

const OnboardingTwoScreen = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <Text>Second Onboarding Screen</Text>
      <Button
        title="Finish onboarding and go to KYC"
        onPress={() => navigation.replace('KYC')}
      />
    </View>
  );
};

export const OnboardingNavigator = () => {
  return (
    <OnboardingStack.Navigator>
      <OnboardingStack.Screen
        name="OnboardingOne"
        component={OnboardingOneScreen}
      />
      <OnboardingStack.Screen
        name="OnboardingTwo"
        component={OnboardingTwoScreen}
      />
    </OnboardingStack.Navigator>
  );
};
