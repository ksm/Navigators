import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {OnboardingNavigator} from './src/Onboarding';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const KYCStack = createStackNavigator();
const CardOnboardingStack = createStackNavigator();

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <Text>Home Screen</Text>
      <Button
        title="Start onboarding"
        onPress={() => navigation.navigate('Onboarding')}
      />
    </View>
  );
};

const AppStack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Navigators App'}}
        />
        <AppStack.Screen
          name="Onboarding"
          component={OnboardingNavigator}
          options={{presentation: 'modal', headerShown: false}}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
