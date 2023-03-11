import React from 'react';
import {View, StyleSheet, ViewStyle} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS} from '../constants/StyleConstants';
import {RFValue} from 'react-native-responsive-fontsize';

export const DIRECTION = {
  HORIZONTAL: 'horizontal',
  VERTICAL: 'vertical',
} as const;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
  },
});

interface PropsI {
  children: any;
  startColor: string;
  endColor: string;
  backgroundColor?: string;
  borderWidth?: number;
  borderRadius?: number;
  direction?: 'horizontal' | 'vertical';
  width?: number;
  height?: number;
  customStyle?: ViewStyle;
}

export function GradientBorderWrapper({
  children,
  startColor,
  endColor,
  backgroundColor,
  borderWidth = 1,
  borderRadius,
  width = wp(100),
  height,
  direction = DIRECTION.VERTICAL,
  customStyle,
}: PropsI) {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={direction === DIRECTION.HORIZONTAL ? {x: 1, y: 0} : {x: 0, y: 1}}
      colors={[startColor, endColor]}
      style={StyleSheet.flatten([
        styles.container,
        {width: width && width},
        {height: height && height},
        {borderRadius: borderRadius ? RFValue(borderRadius) : 0},
        customStyle,
      ])}>
      <View
        style={StyleSheet.flatten([
          styles.content,
          {width: width - RFValue(borderWidth) * 2, margin: RFValue(borderWidth)},
          {borderRadius: borderRadius ? RFValue(borderRadius - borderWidth) : 0},
          {backgroundColor: backgroundColor ? backgroundColor : COLORS.WHITE},
        ])}>
        {children}
      </View>
    </LinearGradient>
  );
}
