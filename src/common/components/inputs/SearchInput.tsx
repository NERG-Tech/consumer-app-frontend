import React from 'react';
import {View, Image, TextInput, StyleSheet, ViewStyle, TextStyle} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {COLORS} from '../../constants/StyleConstants';
import {Button} from '../buttons';
import {useAssets} from '../../../hooks/useAssets';

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
  searchBtn: {
    marginRight: RFValue(16),
  },
  searchIcon: {
    width: RFValue(30),
    height: RFValue(30),
    resizeMode: 'contain',
  },
});

interface PropsI {
  value: string;
  onChangeText: (text: string) => void;
  onSearch: (searchQuery: string) => void;
  placeholder?: string;
  customStyle?: ViewStyle;
  textStyle?: TextStyle;
  selectionColor?: string;
  placeholderTextColor?: string;
}

export function SearchInput({
  value,
  onChangeText,
  onSearch,
  placeholder,
  customStyle,
  textStyle,
  selectionColor,
  placeholderTextColor,
}: PropsI) {
  const assets = useAssets;
  return (
    <View style={StyleSheet.flatten([styles.container, customStyle])}>
      <TextInput
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        autoCorrect={false}
        autoCapitalize="none"
        selectionColor={selectionColor || COLORS.TEXT_GREY}
        placeholderTextColor={placeholderTextColor || COLORS.TEXT_GREY_LIGHT}
        style={StyleSheet.flatten([styles.input, textStyle])}
      />
      {!!value && (
        <Button customStyle={styles.searchBtn} onPress={() => onSearch(value)}>
          <Image source={assets('hoc.search')} style={styles.searchIcon} />
        </Button>
      )}
    </View>
  );
}
