import * as React from 'react';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



// or any pure javascript modules available in npm
import Home from './Home';
import Players from './Players';
import Tabs from './Tabs';

const StackApp = createStackNavigator();

function HomeScreen(){
  return(
    <Home/>
  );
}
function PlayersScreen(){
  return(
    <Players/>
  );
}


function loginStack(){
   return (
      <StackApp.Navigator screenOptions={{
    headerShown: false
  }} initialRouteName="Tabs">
        <StackApp.Screen name="Tabs" component={Tabs} />
      </StackApp.Navigator>
  );
}

export default loginStack;