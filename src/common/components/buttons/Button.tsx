import React from 'react';
import {
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  ViewStyle,
  GestureResponderEvent,
} from 'react-native';
import {RectButton as RNRectButton, RectButtonProps} from 'react-native-gesture-handler';
import {COLORS} from '../../constants/StyleConstants';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

interface RectPropsI extends RectButtonProps {
  children: any;
  loading?: boolean;
  customStyle?: ViewStyle;
}

export function RectButton({
  children,
  onPress,
  underlayColor,
  enabled = true,
  loading = false,
  customStyle,
}: RectPropsI) {
  return (
    <RNRectButton
      onPress={onPress}
      enabled={enabled}
      underlayColor={underlayColor}
      style={StyleSheet.flatten([
        styles.container,
        customStyle,
        {opacity: enabled === false || loading === true ? 0.5 : 1},
      ])}>
      {loading ? <ActivityIndicator color={COLORS.SHAPE} /> : children}
    </RNRectButton>
  );
}

interface OpacityPropsI {
  children: any;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  loading?: boolean;
  customStyle?: ViewStyle;
}

export const Button = ({children, onPress, loading = false, customStyle}: OpacityPropsI) => (
  <TouchableOpacity
    onPress={onPress}
    style={StyleSheet.flatten([styles.container, customStyle])}
    activeOpacity={0.65}
    hitSlop={{top: 20, left: 20, bottom: 20, right: 20}}>
    {loading ? <ActivityIndicator color={COLORS.SHAPE} /> : children}
  </TouchableOpacity>
);
