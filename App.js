import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground, Button, TouchableOpacity, Image } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// You can import from local files
import Login from './components/Login';
import Teste from './components/Home-Card/Team-Card'
export default function App() {
  return (
    <Login/>
  );
}