import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import type {StackNavigationProp} from '@react-navigation/stack';
import {GROUP_SCREEN} from '../common/constants/NavigationConstants';

import GroupScreen from '../screens/Group';

export type GroupStackParamList = {
  [GROUP_SCREEN]: undefined;
};

export type GroupStackNavigationProp<RouteName extends keyof GroupStackParamList> =
  StackNavigationProp<GroupStackParamList, RouteName>;

export type GroupNavigations = {
  [RouteName in keyof GroupStackParamList]: GroupStackNavigationProp<RouteName>;
};

export type GroupStackRoutes = {
  [RouteName in keyof GroupStackParamList]: RouteProp<GroupStackParamList, RouteName>;
};

const {Screen, Navigator} = createStackNavigator<GroupStackParamList>();

export function GroupStack() {
  return (
    <Navigator screenOptions={{headerShown: false}} initialRouteName={GROUP_SCREEN}>
      <Screen name={GROUP_SCREEN} component={GroupScreen} />
    </Navigator>
  );
}
