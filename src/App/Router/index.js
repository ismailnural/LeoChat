// Global Imports
import React from "react";

import {
  withNavigation,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';

import {
  fromBottom,
  
} from "react-navigation-transitions";

// Local Imports
import Home from "@App/Scenes/Home";
import ChatRoom from "@App/Scenes/ChatRoom";

const AppStackNavigator = createStackNavigator(
  {
    Home: {
      navigationOptions: ({ navigation }) => ({
        title: "Lobby",
      }),
      screen: Home
    },
    ChatRoom: {
      screen: ChatRoom,
    }
  },
  {
    initialRouteName: "Home",
    transitionConfig: () => fromBottom(),
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: '#222',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }),
  }
);

const AppContainer = createAppContainer(withNavigation(AppStackNavigator));

export default AppContainer;
