import React from 'react';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import FirstScreen from './screens/FirstScreen';
import { AppTabNavigator } from './components/AppTabNavigator'

export default function App() {
  return (
    
    <AppContainer/>
  );
}


const switchNavigator = createSwitchNavigator({
  FirstScreen:{screen: FirstScreen},
  BottomTab:{screen: AppTabNavigator}
})

const AppContainer =  createAppContainer(switchNavigator);