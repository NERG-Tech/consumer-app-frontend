import React from 'react';
import {View, Text, Image, StyleSheet, GestureResponderEvent} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Button, CircularProgressBar, CircularProgressBarPropsI} from '../../../common/components';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../../common/constants/StyleConstants';
import {useAssets} from '../../../hooks/useAssets';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  contentWrapper: {
    flex: 1,
    position: 'relative',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  percentWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  percentValue: {
    fontWeight: FONT_WEIGHT.SEMI_BOLD,
    fontSize: RFValue(32),
    color: COLORS.TEXT_DARK,
  },
  percentSymbol: {
    fontWeight: FONT_WEIGHT.LIGHT,
    fontSize: RFValue(24),
    color: COLORS.TEXT_DARK,
    marginLeft: RFValue(8),
  },
  labelText: {
    fontWeight: FONT_WEIGHT.LIGHT,
    fontSize: FONT_SIZE.MS,
    color: COLORS.TEXT_DARK,
    textAlign: 'center',
    marginBottom: wp(4),
    paddingHorizontal: wp(4),
  },
  arrowWrapper: {
    position: 'absolute',
    flexDirection: 'column',
    alignItems: 'center',
    bottom: wp(4),
  },
  arrow: {
    width: RFValue(16),
    height: RFValue(16),
    resizeMode: 'contain',
  },
  addListWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp(1),
  },
  addListText: {
    fontWeight: FONT_WEIGHT.MIDDLE,
    fontSize: wp(5),
    color: COLORS.TEXT_DARK,
  },
  addListImage: {
    width: wp(5),
    height: wp(5),
    resizeMode: 'contain',
    marginLeft: RFValue(4),
  },
});

interface PropsI extends CircularProgressBarPropsI {
  value: number;
  unit?: string;
  label: string;
  onAddList: (event: GestureResponderEvent) => void;
}

export function PlayerStatusBar({
  value,
  unit,
  label,
  progress,
  diameter,
  startColor,
  endColor,
  strokeWidth,
  onAddList,
}: PropsI) {
  const assets = useAssets;

  return (
    <View style={styles.container}>
      <CircularProgressBar
        progress={progress}
        diameter={diameter}
        startColor={startColor}
        endColor={endColor}
        strokeWidth={strokeWidth}>
        <View style={styles.contentWrapper}>
          <View style={styles.percentWrapper}>
            <Text style={styles.percentValue}>
              {value.toLocaleString(undefined, {maximumFractionDigits: 2})}
            </Text>
            <Text style={styles.percentSymbol}>{unit}</Text>
          </View>
          <Text style={styles.labelText}>{label}</Text>
          <View style={styles.arrowWrapper}>
            <Image style={styles.arrow} source={assets('global.arrow_up')} />
          </View>
        </View>
      </CircularProgressBar>
      <Button customStyle={styles.addListWrapper} onPress={onAddList}>
        <Text style={styles.addListText}>Journal</Text>
        <Image style={styles.addListImage} source={assets('global.list_add')} />
      </Button>
    </View>
  );
}
