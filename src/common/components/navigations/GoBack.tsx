import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {useAssets} from '../../../hooks/useAssets';
import {Button} from '../buttons';
import DefaultTheme from '../../../common/theme';

export const DIRECTION = {
  LEFT: 'left',
  RIGHT: 'right',
  UP: 'up',
  DOWN: 'down',
} as const;

const styles = StyleSheet.create({
  container: {
    marginTop: RFValue(16),
  },
  left: {
    marginLeft: RFValue(20),
  },
  right: {
    marginRight: RFValue(20),
  },
  email: {
    width: 20,
    resizeMode: 'contain',
  },
});

interface PropsI {
  navigation: any;
  icon: 'left' | 'right' | 'down';
  positoin?: 'left' | 'right';
}

export function GoBack({navigation, icon, positoin = DIRECTION.LEFT}: PropsI) {
  const assets = useAssets;
  return (
    <Button
      customStyle={StyleSheet.flatten([
        styles.container,
        positoin === DIRECTION.LEFT ? styles.left : styles.right,
      ])}
      onPress={() => navigation.goBack()}>
      <Image style={DefaultTheme.headerCircleArrow} source={assets(`circle_${icon}`)} />
    </Button>
  );
}
