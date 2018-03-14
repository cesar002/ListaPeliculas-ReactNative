import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

import { StackNavigator } from 'react-navigation';

import Home from './Screens/Home';
import List from './Screens/List';
import AddPeli from './Screens/AddPeli';

const Navigation = StackNavigator({
  HomeS:    {screen: Home},
  ListS:    {screen: List},
  AddPeliS: {screen: AddPeli},
});

export default Navigation;