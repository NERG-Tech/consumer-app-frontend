import React from 'react';
import {ActivityIndicator, Text, View, StyleSheet, ViewStyle, TextStyle} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {RFValue} from 'react-native-responsive-fontsize';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../constants/StyleConstants';
import {RectButton} from './Button';
import {RectButtonProps} from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: RFValue(50),
    borderWidth: RFValue(1),
    borderColor: COLORS.BORDER_ALPHA_LIGHT,
    elevation: 2,
    shadowOpacity: 1,
    shadowRadius: 4,
    shadowColor: COLORS.BLACK_ALPHA,
    shadowOffset: {width: 2, height: 2},
  },
  button: {
    width: '100%',
    height: '100%',
    borderRadius: RFValue(50),
  },
  text: {
    fontWeight: FONT_WEIGHT.LIGHT,
    fontSize: FONT_SIZE.L,
    color: COLORS.WHITE,
  },
});

interface PropsI extends RectButtonProps {
  children?: any;
  label?: string | undefined;
  startColor: string;
  endColor: string;
  loading?: boolean;
  enabled?: boolean;
  customStyle?: ViewStyle;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
}

export function RoundedGradientButton({
  children,
  label,
  startColor,
  endColor,
  onPress,
  enabled = true,
  loading = false,
  customStyle,
  buttonStyle,
  textStyle,
}: PropsI) {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={[startColor, endColor]}
      style={StyleSheet.flatten([
        styles.container,
        customStyle,
        {opacity: enabled === false || loading === true ? 0.5 : 1},
      ])}>
      <RectButton customStyle={StyleSheet.flatten([styles.button, buttonStyle])} onPress={onPress}>
        {loading ? (
          <ActivityIndicator color={COLORS.SHAPE} />
        ) : children ? (
          <View style={{flex: 0}}>{children}</View>
        ) : (
          <Text style={StyleSheet.flatten([styles.text, textStyle])}>{label}</Text>
        )}
      </RectButton>
    </LinearGradient>
  );
}
