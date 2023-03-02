import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import type {StackNavigationProp} from '@react-navigation/stack';
import {RFValue} from 'react-native-responsive-fontsize';
import {HOME, SETTINGS, NOTIFICATIONS} from '../common/constants/NavigationConstants';
import {HeaderLogo, GoToEmail, GoToSetting} from '../common/components';
import {COLORS} from '../common/constants/StyleConstants';

import {TabStack} from './TabStack';
import SettingScreen from '../screens/Setting';
import NotificationScreen from '../screens/Notification';

export type AppStackParamList = {
  [HOME]: undefined;
  [SETTINGS]: undefined;
  [NOTIFICATIONS]: undefined;
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

const {Screen, Navigator} = createStackNavigator<AppStackParamList>();

export function AppStack() {
  return (
    <Navigator initialRouteName={HOME}>
      <Screen
        name={HOME}
        component={TabStack}
        options={({navigation}) => ({
          headerStyle: {
            height: RFValue(70),
            backgroundColor: COLORS.BLACK_MIDDLE,
          },
          headerTitle: () => <HeaderLogo />,
          headerLeft: () => <GoToSetting navigation={navigation} />,
          headerRight: () => <GoToEmail navigation={navigation} />,
        })}
      />
      <Screen name={SETTINGS} component={SettingScreen} />
      <Screen name={NOTIFICATIONS} component={NotificationScreen} />
    </Navigator>
  );
}
