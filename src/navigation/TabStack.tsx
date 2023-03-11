import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import type {StackNavigationProp} from '@react-navigation/stack';
import {RFValue} from 'react-native-responsive-fontsize';
import {HOME_TAB, SHARE_TAB, GROUP_TAB} from '../common/constants/NavigationConstants';
import {COLORS} from '../common/constants/StyleConstants';
import {useAssets} from '../hooks/useAssets';
import {Tab} from '../common/components';

import {HomeStack} from './HomeStack';
import {ShareStack} from './ShareStack';
import {GroupStack} from './GroupStack';

export type TabStackParamList = {
  [HOME_TAB]: undefined;
  [SHARE_TAB]: undefined;
  [GROUP_TAB]: undefined;
};

export type TabStackNavigationProp<RouteName extends keyof TabStackParamList> = StackNavigationProp<
  TabStackParamList,
  RouteName
>;

export type TabNavigations = {
  [RouteName in keyof TabStackParamList]: TabStackNavigationProp<RouteName>;
};

export type TabStackRoutes = {
  [RouteName in keyof TabStackParamList]: RouteProp<TabStackParamList, RouteName>;
};

const {Screen, Navigator} = createBottomTabNavigator<TabStackParamList>();

export function TabStack() {
  const assets = useAssets;

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: RFValue(80),
          backgroundColor: COLORS.BLACK_MIDDLE,
        },
        tabBarHideOnKeyboard: true,
      }}
      initialRouteName={HOME_TAB}>
      <Screen
        name={HOME_TAB}
        component={HomeStack}
        options={{
          tabBarIcon: ({focused}) => (
            <Tab icon={focused ? assets('main.home_active_tab') : assets('main.home_normal_tab')} />
          ),
        }}
      />
      <Screen
        name={SHARE_TAB}
        component={ShareStack}
        options={{
          tabBarIcon: ({focused}) => (
            <Tab
              icon={focused ? assets('main.share_active_tab') : assets('main.share_normal_tab')}
            />
          ),
        }}
      />
      <Screen
        name={GROUP_TAB}
        component={GroupStack}
        options={{
          tabBarIcon: ({focused}) => (
            <Tab
              icon={focused ? assets('main.group_active_tab') : assets('main.group_normal_tab')}
            />
          ),
        }}
      />
    </Navigator>
  );
}
