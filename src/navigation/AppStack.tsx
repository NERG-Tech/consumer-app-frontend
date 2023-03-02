import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import type {StackNavigationProp} from '@react-navigation/stack';
import {useTranslation} from 'react-i18next';
import {HOME, SETTINGS, NOTIFICATIONS} from '../common/constants/NavigationConstants';
import {HeaderLogo, GoToEmail, GoToSetting, GoBack, DIRECTION} from '../common/components';
import DefaultTheme from '../common/theme';
import {DefaultHeaderOptions} from '../common/theme/Navigation';

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
  const {t} = useTranslation();

  return (
    <Navigator initialRouteName={HOME}>
      <Screen
        name={HOME}
        component={TabStack}
        options={({navigation}) => ({
          headerStyle: {...DefaultTheme.headerStyle},
          headerTitleAlign: 'center',
          headerTitle: () => <HeaderLogo />,
          headerLeft: () => <GoToSetting navigation={navigation} />,
          headerRight: () => <GoToEmail navigation={navigation} />,
        })}
      />
      <Screen
        name={SETTINGS}
        component={SettingScreen}
        options={({navigation}) => ({
          ...DefaultHeaderOptions,
          title: t('navigation.settings') as string,
          headerLeft: () => null,
          headerRight: () => (
            <GoBack navigation={navigation} icon={DIRECTION.RIGHT} positoin={DIRECTION.RIGHT} />
          ),
        })}
      />
      <Screen
        name={NOTIFICATIONS}
        component={NotificationScreen}
        options={({navigation}) => ({
          ...DefaultHeaderOptions,
          title: t('navigation.notifications') as string,
          headerLeft: () => (
            <GoBack navigation={navigation} icon={DIRECTION.LEFT} positoin={DIRECTION.LEFT} />
          ),
        })}
      />
    </Navigator>
  );
}
