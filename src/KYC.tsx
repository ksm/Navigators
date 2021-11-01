import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellow',
  },
});

const KYCStack = createStackNavigator();

const KYCOneScreen = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <Text>First KYC Screen</Text>
      <Button
        title="Continue KYC..."
        onPress={() => navigation.navigate('KYCTwo')}
      />
    </View>
  );
};

const KYCTwoScreen = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <Text>Second KYC Screen</Text>
      {/* <Button
        title="Finish KYC"
        onPress={() => navigation.navigate('KYCTwo')}
      /> */}
    </View>
  );
};

export const KYCNavigator = () => {
  return (
    <KYCStack.Navigator>
      <KYCStack.Screen name="KYCOne" component={KYCOneScreen} />
      <KYCStack.Screen name="KYCTwo" component={KYCTwoScreen} />
    </KYCStack.Navigator>
  );
};
