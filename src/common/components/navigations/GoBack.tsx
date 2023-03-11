import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {useAssets} from '../../../hooks/useAssets';
import {Button} from '../buttons';
import DefaultTheme from '../../../common/theme';

export const POSITION = {
  LEFT: 'left',
  RIGHT: 'right',
  UP: 'up',
  DOWN: 'down',
  CLOSE: 'close',
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
});

interface PropsI {
  navigation: any;
  icon: 'left' | 'right' | 'down' | 'close';
  position?: 'left' | 'right';
}

export function GoBack({navigation, icon, position = POSITION.LEFT}: PropsI) {
  const assets = useAssets;
  return (
    <Button
      customStyle={StyleSheet.flatten([
        styles.container,
        position === POSITION.LEFT ? styles.left : styles.right,
      ])}
      onPress={() => navigation.goBack()}>
      <Image style={DefaultTheme.headerCircleArrow} source={assets(`hoc.circle_${icon}`)} />
    </Button>
  );
}
