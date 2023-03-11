import React from 'react';
import {View, Text, StyleSheet, ViewStyle} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {COLORS, FONT_WEIGHT, FONT_SIZE} from '../../../common/constants/StyleConstants';
import {RoundedGradientButton} from '../../../common/components';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: RFValue(30),
    marginBottom: RFValue(16),
    paddingVertical: RFValue(16),
    paddingHorizontal: RFValue(20),
    borderColor: COLORS.BLUE_SKY,
    borderWidth: RFValue(1),
    borderRadius: RFValue(24),
    backgroundColor: COLORS.WHITE,
  },
  itemContentWrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  itemTitle: {
    fontSize: FONT_SIZE.MD,
    fontWeight: FONT_WEIGHT.SEMI_BOLD,
    color: COLORS.TEXT_DARK,
  },
  itemDescription: {
    fontSize: FONT_SIZE.MS,
    fontWeight: FONT_WEIGHT.LIGHT,
    color: COLORS.TEXT_DARK,
    marginTop: RFValue(8),
  },
  itemProperty: {
    fontSize: FONT_SIZE.XS,
    fontWeight: FONT_WEIGHT.LIGHT,
    color: COLORS.TEXT_DARK,
  },
  controlWrapper: {
    flexDirection: 'column',
    justifyContent: 'center',
    width: '40%',
  },
  itemSize: {
    fontSize: FONT_SIZE.MS,
    fontWeight: FONT_WEIGHT.SEMI_BOLD,
    color: COLORS.TEXT_DARK,
  },
  selectBtnWrapper: {
    width: RFValue(100),
    height: RFValue(36),
    marginTop: RFValue(16),
  },
  selectBtnText: {
    fontSize: FONT_SIZE.MS,
    fontWeight: FONT_WEIGHT.LIGHT,
  },
});

interface PropsI {
  title: string;
  description: string;
  property?: string | undefined;
  size: number;
  onSelect: () => void;
  customStyle?: ViewStyle;
}

export function SearchItem({title, description, property, size, onSelect, customStyle}: PropsI) {
  return (
    <View style={[styles.container, customStyle]}>
      <View style={styles.itemContentWrapper}>
        <View style={{flexDirection: 'column'}}>
          <Text style={styles.itemTitle}>{title}</Text>
          <Text style={styles.itemDescription}>{description}</Text>
        </View>
        <Text style={styles.itemProperty}>{property}</Text>
      </View>
      <View style={styles.controlWrapper}>
        <Text style={styles.itemSize}>{`${size} Serving Sizes`}</Text>
        <RoundedGradientButton
          label={'Select'}
          onPress={() => onSelect()}
          startColor={COLORS.BLUE}
          endColor={COLORS.BLACK}
          customStyle={styles.selectBtnWrapper}
          textStyle={styles.selectBtnText}
        />
      </View>
    </View>
  );
}
