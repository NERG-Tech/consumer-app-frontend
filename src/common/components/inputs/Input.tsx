import React, {useState, useEffect} from 'react';
import {View, TextInput, StyleSheet, ViewStyle, TextStyle, KeyboardTypeOptions} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import Icon from 'react-native-easy-icon';
import {COLORS} from '../../../common/constants/StyleConstants';
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
  clearBtn: {
    marginRight: RFValue(16),
  },
});

interface PropsI {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions | undefined;
  autoCorrect?: boolean;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined;
  customStyle?: ViewStyle;
  textStyle?: TextStyle;
  selectionColor?: string;
  placeholderTextColor?: string;
}

export function Input({
  value,
  onChangeText,
  placeholder,
  keyboardType,
  autoCorrect,
  autoCapitalize,
  customStyle,
  textStyle,
  selectionColor,
  placeholderTextColor,
}: PropsI) {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [isClear, setIsClear] = useState(false);

  useEffect(() => {
    if (isFocused && !!value) {
      setIsClear(true);
    } else {
      setIsClear(false);
    }
  }, [isFocused, isFilled, value]);

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
    setIsFilled(!!value);
  };

  return (
    <View style={StyleSheet.flatten([styles.container, customStyle])}>
      <TextInput
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        keyboardType={keyboardType}
        autoCorrect={autoCorrect}
        autoCapitalize={autoCapitalize}
        selectionColor={selectionColor || COLORS.TEXT_GREY}
        placeholderTextColor={placeholderTextColor || COLORS.TEXT_GREY_LIGHT}
        style={StyleSheet.flatten([styles.input, textStyle])}
      />
      {isClear && (
        <Button customStyle={styles.clearBtn} onPress={() => onChangeText('')}>
          <Icon
            type="antdesign"
            name="closecircle"
            color={COLORS.TEXT_GREY_LIGHT}
            size={RFValue(16)}
          />
        </Button>
      )}
    </View>
  );
}
