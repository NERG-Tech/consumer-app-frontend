import React from 'react';
import {
  ActivityIndicator,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  GestureResponderEvent,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {RFValue} from 'react-native-responsive-fontsize';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../constants/StyleConstants';
import {Button} from './Button';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: FONT_WEIGHT.LIGHT,
    fontSize: RFValue(FONT_SIZE.XL),
    color: COLORS.WHITE,
  },
});

interface PropsI {
  label: string;
  startColor: string;
  endColor: string;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  loading?: boolean;
  enabled?: boolean;
  customStyle?: ViewStyle;
  textStyle?: TextStyle;
}

export function GradientButton({
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
    <Button onPress={onPress}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={[startColor, endColor]}
        style={StyleSheet.flatten([
          styles.container,
          customStyle,
          {opacity: enabled === false || loading === true ? 0.5 : 1},
        ])}>
        <Text style={StyleSheet.flatten([styles.text, textStyle])}>
          {loading ? <ActivityIndicator color={COLORS.SHAPE} /> : label}
        </Text>
      </LinearGradient>
    </Button>
  );
}
