import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import type {StackNavigationProp} from '@react-navigation/stack';
import {HOME_TAB, SHARE_TAB, FOCUS_TAB} from '../common/constants/NavigationConstants';
import HomeScreen from '../screens/Home';
import ShareScreen from '../screens/Share';
import FocusScreen from '../screens/Focus';

export type AppStackParamList = {
  [HOME_TAB]: undefined;
  [SHARE_TAB]: undefined;
  [FOCUS_TAB]: undefined;
};

export type AppStackNavigationProp<RouteName extends keyof AppStackParamList> = StackNavigationProp<
  AppStackParamList,
  RouteName
>;

export type AppNavigations = {
  [RouteName in keyof AppStackParamList]: AppStackNavigationProp<RouteName>;
};

export type AppStackRoutes = {
  [RouteName in keyof AppStackParamList]: RouteProp<AppStackParamList, RouteName>;
};

const {Screen, Navigator} = createBottomTabNavigator<AppStackParamList>();

export function AppStack() {
  return (
    <Navigator
      screenOptions={{headerShown: false, tabBarShowLabel: false}}
      initialRouteName={HOME_TAB}>
      <Screen name={HOME_TAB} component={HomeScreen} />
      <Screen name={SHARE_TAB} component={ShareScreen} />
      <Screen name={FOCUS_TAB} component={FocusScreen} />
    </Navigator>
  );
}
