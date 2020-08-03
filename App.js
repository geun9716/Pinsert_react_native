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
  Button,
  Image,
} from 'react-native';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView>
      <Image style = {styles.logo} source = {require('./assets/pinsert_logo.png')}/>
      <Text>This is Home</Text>
    </SafeAreaView>
  );
};
function SearchScreen({ navigation }) {
  return (
    <SafeAreaView>
      <Image style = {styles.logo} source = {require('./assets/pinsert_logo.png')}/>
      <Text>This is Search</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </SafeAreaView>
  );
};
function AlarmScreen({ navigation }) {
  return (
    <SafeAreaView>
      <Image style = {styles.logo} source = {require('./assets/pinsert_logo.png')}/>
      <Text>This is Alarm</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </SafeAreaView>
  );
};
function PinsertScreen({ navigation }) {
  return (
    <SafeAreaView>
      <Image style = {styles.logo} source = {require('./assets/pinsert_logo.png')}/>
      <Text>This is Pinsert</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </SafeAreaView>
  );
};
function ProfileScreen({navigation}){
  return (
    <SafeAreaView>
      <Image style = {styles.logo} source = {require('./assets/pinsert_logo.png')}/>
      <Text>This is Jane's profile</Text>
      {/* <Button
        title="Go to Jane's profile"
        onPress={() =>
        navigation.push('Profile', { name: 'Jane' })
      }/> */}
    <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    <Button title="Go back" onPress={() => navigation.goBack()} />
    </SafeAreaView>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName ="Home"
        tabBarOptions={{
          activeTintColor: 'black',
        }}
        >
        <Tab.Screen name="Pinsert" component={PinsertScreen}options ={{
          tabBarlabel : 'Home', 
          tabBarIcon: ({ fucused }) => (
            <Image source = {require('./assets/ic_pinsert.png')} style={styles.bottomicon} />),}}
          />
        <Tab.Screen name="Search" component={SearchScreen}options ={{
          tabBarlabel : 'Home', 
          tabBarIcon: ({ color }) => (
            <Image source = {require('./assets/ic_search.png')} style={styles.bottomicon} />),}}
          />
        <Tab.Screen name="Home" component={HomeScreen} options ={{
          tabBarlabel : 'Home', 
          tabBarIcon: ({ color }) => (
            <Image source = {require('./assets/ic_home.png')} style={styles.bottomicon} />),}}
          />
        <Tab.Screen name="Alarm" component={AlarmScreen}options ={{
          tabBarlabel : 'Home', 
          tabBarIcon: ({ color }) => (
            <Image source = {require('./assets/ic_favorite.png')} style={styles.bottomicon} />),}}
          />
        <Tab.Screen name="Profile" component={ProfileScreen} options ={{
          tabBarlabel : 'Home', 
          tabBarIcon: ({ color }) => (
            <Image source = {require('./assets/ic_account.png')} style={styles.bottomicon} />),}}
          />
      </Tab.Navigator>
    </NavigationContainer>
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
  bottomicon :{
    width : 20,
    height : 20,
    resizeMode : 'contain',
  }
});



export default App;
