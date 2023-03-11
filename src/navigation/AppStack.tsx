import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import type {StackNavigationProp} from '@react-navigation/stack';
import {useTranslation} from 'react-i18next';
import {
  ACTIVITY_JOURNAL,
  FOOD_JOURNAL,
  HOME,
  HYDRATION_JOURNAL,
  SETTINGS,
  NOTIFICATIONS,
  REST_JOURNAL,
} from '../common/constants/NavigationConstants';
import {HeaderLogo, GoToEmail, GoToSetting, GoBack, POSITION} from '../common/components';
import DefaultTheme from '../common/theme';
import {DefaultHeaderOptions} from '../common/theme/Navigation';

import {TabStack} from './TabStack';
import SettingScreen from '../screens/Setting';
import NotificationScreen from '../screens/Notification';
import HydrationJournalScreen from '../screens/HydrationJournal';
import RestJournalScreen from '../screens/RestJournal';
import FoodJournalScreen from '../screens/FoodJournal';
import ActivityJournalScreen from '../screens/ActivityJournal';

export type AppStackParamList = {
  [HOME]: undefined;
  [SETTINGS]: undefined;
  [NOTIFICATIONS]: undefined;
  [HYDRATION_JOURNAL]: undefined;
  [REST_JOURNAL]: undefined;
  [FOOD_JOURNAL]: undefined;
  [ACTIVITY_JOURNAL]: undefined;
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
            <GoBack navigation={navigation} icon={POSITION.RIGHT} position={POSITION.RIGHT} />
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
            <GoBack navigation={navigation} icon={POSITION.LEFT} position={POSITION.LEFT} />
          ),
        })}
      />
      <Screen
        name={HYDRATION_JOURNAL}
        component={HydrationJournalScreen}
        options={({navigation}) => ({
          ...DefaultHeaderOptions,
          title: t('navigation.hj') as string,
          headerLeft: () => null,
          headerRight: () => (
            <GoBack navigation={navigation} icon={POSITION.CLOSE} position={POSITION.RIGHT} />
          ),
        })}
      />
      <Screen
        name={REST_JOURNAL}
        component={RestJournalScreen}
        options={({navigation}) => ({
          ...DefaultHeaderOptions,
          title: t('navigation.rj') as string,
          headerLeft: () => null,
          headerRight: () => (
            <GoBack navigation={navigation} icon={POSITION.CLOSE} position={POSITION.RIGHT} />
          ),
        })}
      />
      <Screen
        name={FOOD_JOURNAL}
        component={FoodJournalScreen}
        options={({navigation}) => ({
          ...DefaultHeaderOptions,
          title: t('navigation.fj') as string,
          headerLeft: () => null,
          headerRight: () => (
            <GoBack navigation={navigation} icon={POSITION.CLOSE} position={POSITION.RIGHT} />
          ),
        })}
      />
      <Screen
        name={ACTIVITY_JOURNAL}
        component={ActivityJournalScreen}
        options={({navigation}) => ({
          ...DefaultHeaderOptions,
          title: t('navigation.aj') as string,
          headerLeft: () => null,
          headerRight: () => (
            <GoBack navigation={navigation} icon={POSITION.CLOSE} position={POSITION.RIGHT} />
          ),
        })}
      />
    </Navigator>
  );
}
