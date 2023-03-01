import React from 'react';
import {NavigationContainer, createNavigationContainerRef} from '@react-navigation/native';
import {useAuth} from '../contexts/AuthProvider';
import {AuthStack, AuthStackRoutes, AuthNavigations} from './AuthStack';
import {AppStack, AppStackRoutes, AppNavigations} from './AppStack';

export type Navigations = AuthNavigations & AppNavigations;

export type Routes = AuthStackRoutes & AppStackRoutes;

export const navigationRef = createNavigationContainerRef();

export function AppNavigator() {
  const {authData} = useAuth();

  const isLogin = authData?.accessToken.length;

  return (
    <NavigationContainer ref={navigationRef}>
      {isLogin ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
