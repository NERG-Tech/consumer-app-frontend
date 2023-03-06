import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ViewStyle,
  TextStyle,
  KeyboardTypeOptions,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../constants/StyleConstants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.BACKGROUND_GREY,
    height: RFValue(50),
    borderRadius: RFValue(16),
  },
  input: {
    fontSize: FONT_SIZE.MD,
    fontWeight: FONT_WEIGHT.SEMI_BOLD,
    color: COLORS.WHITE,
    textAlign: 'center',
    paddingVertical: RFValue(5),
    paddingHorizontal: RFValue(10),
    borderLeftWidth: 1,
    borderLeftColor: COLORS.DIVIDER_LIGHT,
  },
  label: {
    flex: 1,
    fontSize: FONT_SIZE.XXS,
    fontWeight: FONT_WEIGHT.LIGHT,
    color: COLORS.TEXT_GREY_LIGHTER,
    textAlign: 'center',
    paddingHorizontal: RFValue(10),
  },
});

interface PropsI {
  label: string;
  value: string;
  onChangeText?: (text: string) => void;
  keyboardType?: KeyboardTypeOptions | undefined;
  selectionColor?: string;
  placeholder?: string;
  placeholderTextColor?: string;
  customStyle?: ViewStyle;
  labelStyle?: TextStyle;
  textStyle?: TextStyle;
}

export function AttributeInput({
  label,
  value,
  onChangeText,
  keyboardType,
  placeholder,
  placeholderTextColor,
  selectionColor,
  customStyle,
  textStyle,
  labelStyle,
}: PropsI) {
  return (
    <View style={StyleSheet.flatten([styles.container, customStyle])}>
      <Text style={StyleSheet.flatten([styles.label, labelStyle])}>{label}</Text>
      <TextInput
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        autoCorrect={false}
        autoCapitalize="none"
        selectionColor={selectionColor || COLORS.TEXT_GREY}
        placeholderTextColor={placeholderTextColor || COLORS.TEXT_GREY_LIGHT}
        style={StyleSheet.flatten([styles.input, textStyle])}
      />
    </View>
  );
}
