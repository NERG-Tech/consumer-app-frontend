import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import type {StackNavigationProp} from '@react-navigation/stack';
import {WELCOME, SIGN_IN} from '../common/constants/NavigationConstants';
import WelcomeScreen from '../screens/auth/Welcome';
import SignInScreen from '../screens/auth/SignIn';

export type AuthStackParamList = {
  [WELCOME]: undefined;
  [SIGN_IN]: undefined;
};

export type AuthStackNavigationProp<RouteName extends keyof AuthStackParamList> =
  StackNavigationProp<AuthStackParamList, RouteName>;

export type AuthNavigations = {
  [RouteName in keyof AuthStackParamList]: AuthStackNavigationProp<RouteName>;
};

export type AuthStackRoutes = {
  [RouteName in keyof AuthStackParamList]: RouteProp<AuthStackParamList, RouteName>;
};

const {Screen, Navigator} = createStackNavigator<AuthStackParamList>();

export function AuthStack() {
  return (
    <Navigator initialRouteName="welcome">
      <Screen name={WELCOME} component={WelcomeScreen} options={{headerShown: false}} />
      <Screen name={SIGN_IN} component={SignInScreen} options={{headerShown: false}} />
    </Navigator>
  );
}
