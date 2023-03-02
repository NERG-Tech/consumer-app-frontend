import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import type {StackNavigationProp} from '@react-navigation/stack';
import {FOCUS_SCREEN} from '../common/constants/NavigationConstants';

import FocusScreen from '../screens/Focus';

export type FocusStackParamList = {
  [FOCUS_SCREEN]: undefined;
};

export type FocusStackNavigationProp<RouteName extends keyof FocusStackParamList> =
  StackNavigationProp<FocusStackParamList, RouteName>;

export type FocusNavigations = {
  [RouteName in keyof FocusStackParamList]: FocusStackNavigationProp<RouteName>;
};

export type FocusStackRoutes = {
  [RouteName in keyof FocusStackParamList]: RouteProp<FocusStackParamList, RouteName>;
};

const {Screen, Navigator} = createStackNavigator<FocusStackParamList>();

export function FocusStack() {
  return (
    <Navigator screenOptions={{headerShown: false}} initialRouteName={FOCUS_SCREEN}>
      <Screen name={FOCUS_SCREEN} component={FocusScreen} />
    </Navigator>
  );
}
