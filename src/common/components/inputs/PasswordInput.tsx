import React, {useState, useEffect} from 'react';
import {View, TextInput, StyleSheet, ViewStyle, TextStyle} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import Icon from 'react-native-easy-icon';
import {COLORS} from '../../constants/StyleConstants';
import {Button} from '../buttons';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.BACKGROUND_GREY,
  },
  input: {
    flex: 1,
    paddingLeft: RFValue(16),
    paddingRight: RFValue(8),
    color: COLORS.TEXT_GREY_LIGHT,
    backgroundColor: COLORS.TRANSPARENT,
  },
  eyeBtn: {
    marginRight: RFValue(16),
  },
});

interface PropsI {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  customStyle?: ViewStyle;
  textStyle?: TextStyle;
  selectionColor?: string;
  placeholderTextColor?: string;
}

export function PasswordInput({
  value,
  onChangeText,
  placeholder,
  customStyle,
  textStyle,
  selectionColor,
  placeholderTextColor,
}: PropsI) {
  const [isFocused, setIsFocused] = useState(false);
  const [isPasswordVisible, setPasswordVisible] = useState(true);

  useEffect(() => {
    if (!isFocused) {
      setPasswordVisible(true);
    }
  }, [isFocused]);

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
  };

  const handlePasswordVisibilityChange = () => {
    setPasswordVisible(prevState => !prevState);
  };

  return (
    <View style={StyleSheet.flatten([styles.container, customStyle])}>
      <TextInput
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        autoCorrect={false}
        autoCapitalize="none"
        secureTextEntry={isPasswordVisible}
        selectionColor={selectionColor || COLORS.TEXT_GREY}
        placeholderTextColor={placeholderTextColor || COLORS.TEXT_GREY_LIGHT}
        style={StyleSheet.flatten([styles.input, textStyle])}
      />
      {!!value && (
        <Button customStyle={styles.eyeBtn} onPress={handlePasswordVisibilityChange}>
          <Icon
            type="feather"
            name={isPasswordVisible ? 'eye' : 'eye-off'}
            color={COLORS.TEXT_GREY_LIGHT}
            size={RFValue(16)}
          />
        </Button>
      )}
    </View>
  );
}
