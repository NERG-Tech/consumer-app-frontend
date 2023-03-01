import React from 'react';
import {ActivityIndicator, Text, StyleSheet, ViewStyle, TextStyle} from 'react-native';
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
  label: string;
  startColor: string;
  endColor: string;
  loading?: boolean;
  enabled?: boolean;
  customStyle?: ViewStyle;
  textStyle?: TextStyle;
}

export function RoundedGradientButton({
  label,
  startColor,
  endColor,
  onPress,
  enabled = true,
  loading = false,
  customStyle,
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
      <RectButton customStyle={styles.button} onPress={onPress}>
        <Text style={StyleSheet.flatten([styles.text, textStyle])}>
          {loading ? <ActivityIndicator color={COLORS.SHAPE} /> : label}
        </Text>
      </RectButton>
    </LinearGradient>
  );
}
