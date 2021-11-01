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

const PhoneVerificationStack = createStackNavigator();

const PhoneVerificationOneScreen = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <Text>First PhoneVerification Screen</Text>
      <Button
        title="Continue PhoneVerification..."
        onPress={() => navigation.navigate('PhoneVerificationTwo')}
      />
    </View>
  );
};

const PhoneVerificationTwoScreen = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <Text>Second PhoneVerification Screen</Text>
      <Button
        title="Finish PhoneVerification and go to KYC"
        onPress={() => navigation.replace('KYC')}
      />
    </View>
  );
};

export const PhoneVerificationNavigator = () => {
  return (
    <PhoneVerificationStack.Navigator
      screenOptions={{title: 'Phone Verification'}}>
      <PhoneVerificationStack.Screen
        name="PhoneVerificationOne"
        component={PhoneVerificationOneScreen}
      />
      <PhoneVerificationStack.Screen
        name="PhoneVerificationTwo"
        component={PhoneVerificationTwoScreen}
      />
    </PhoneVerificationStack.Navigator>
  );
};
