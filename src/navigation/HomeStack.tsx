import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import type {StackNavigationProp} from '@react-navigation/stack';
import {HOME_SCREEN} from '../common/constants/NavigationConstants';

import HomeScreen from '../screens/Home';

export type HomeStackParamList = {
  [HOME_SCREEN]: undefined;
};

export type HomeStackNavigationProp<RouteName extends keyof HomeStackParamList> =
  StackNavigationProp<HomeStackParamList, RouteName>;

export type HomeNavigations = {
  [RouteName in keyof HomeStackParamList]: HomeStackNavigationProp<RouteName>;
};

export type HomeStackRoutes = {
  [RouteName in keyof HomeStackParamList]: RouteProp<HomeStackParamList, RouteName>;
};

const {Screen, Navigator} = createStackNavigator<HomeStackParamList>();

export function HomeStack() {
  return (
    <Navigator screenOptions={{headerShown: false}} initialRouteName={HOME_SCREEN}>
      <Screen name={HOME_SCREEN} component={HomeScreen} />
    </Navigator>
  );
}
