import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {useAssets} from '../../hooks/useAssets';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../constants/StyleConstants';
import {Button} from './buttons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  itemWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: RFValue(12),
  },
  text: {
    fontWeight: FONT_WEIGHT.LIGHT,
    fontSize: FONT_SIZE.MS,
    color: COLORS.WHITE,
  },
  checkImage: {
    width: RFValue(28),
    height: RFValue(28),
    resizeMode: 'contain',
  },
});

interface PropsI {
  selectedValue: string;
  options: object;
  onSelectItem: (label: string, value: string) => void;
}

export function CheckItemList({selectedValue, options, onSelectItem}: PropsI) {
  const assets = useAssets;
  return (
    <View style={styles.container}>
      {Object.keys(options).map((item: string, i: number) => (
        <Button
          key={i}
          customStyle={styles.itemWrapper}
          onPress={() => onSelectItem(item, options[item])}>
          <Text style={styles.text}>{options[item]}</Text>
          {selectedValue === item ? (
            <Image style={styles.checkImage} source={assets('hoc.check_active')} />
          ) : (
            <Image style={styles.checkImage} source={assets('hoc.check_empty')} />
          )}
        </Button>
      ))}
    </View>
  );
}
