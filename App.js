/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
   <SafeAreaView>
     <Image style = {styles.logo} source = {require('./assets/pinsert_logo.png')}/>
     <Text>Hello World !</Text>
     {/* <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator> */}
   </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container : {
    justifyContent : 'center',
  },
  logo : {
    width : '100%',
    height : 50,
    resizeMode : 'contain',
    marginBottom : 5,
    backgroundColor : 'lightgray',
  },
});

export default App;
