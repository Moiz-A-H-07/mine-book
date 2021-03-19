import React from 'react';
import{View,Image,StyleSheet,Text} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import ScanningScreen from '../screens/ScanningScreen';
import TextScreen from '../screens/TextScreen';

export const AppTabNavigator = createBottomTabNavigator({
  text:{screen:TextScreen,
  navigationOptions:{
    tabBarLabel:"text"
  }
  },
  scan:{screen:ScanningScreen,
  navigationOptions:{
    tabBarLabel:"scan"
  }
  }
})
  
