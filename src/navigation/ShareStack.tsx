import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import type {StackNavigationProp} from '@react-navigation/stack';
import {SHARE_SCREEN} from '../common/constants/NavigationConstants';

import ShareScreen from '../screens/Share';

export type ShareStackParamList = {
  [SHARE_SCREEN]: undefined;
};

export type ShareStackNavigationProp<RouteName extends keyof ShareStackParamList> =
  StackNavigationProp<ShareStackParamList, RouteName>;

export type ShareNavigations = {
  [RouteName in keyof ShareStackParamList]: ShareStackNavigationProp<RouteName>;
};

export type ShareStackRoutes = {
  [RouteName in keyof ShareStackParamList]: RouteProp<ShareStackParamList, RouteName>;
};

const {Screen, Navigator} = createStackNavigator<ShareStackParamList>();

export function ShareStack() {
  return (
    <Navigator screenOptions={{headerShown: false}} initialRouteName={SHARE_SCREEN}>
      <Screen name={SHARE_SCREEN} component={ShareScreen} />
    </Navigator>
  );
}
