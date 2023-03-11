import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  RoundedGradientButton,
  CircularProgressBar,
  CircularProgressBarPropsI,
} from '../../../common/components';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../../common/constants/StyleConstants';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: RFValue(16),
    width: '100%',
    paddingVertical: RFValue(16),
    paddingHorizontal: RFValue(12),
    borderRadius: RFValue(24),
    borderWidth: RFValue(1),
    borderColor: COLORS.BORDER_ALPHA_LIGHT,
    backgroundColor: COLORS.WHITE,
  },
  contentWrapper: {
    flex: 1,
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
    width: RFValue(100),
  },
  descriptionWrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  textWrapper: {
    flexDirection: 'column',
  },
  todayText: {
    fontWeight: FONT_WEIGHT.LIGHT,
    fontSize: FONT_SIZE.MD,
    color: COLORS.TEXT_DARK,
  },
  lastText: {
    fontWeight: FONT_WEIGHT.LIGHT,
    fontSize: FONT_SIZE.XS,
    color: COLORS.TEXT_DARK,
    marginTop: RFValue(8),
  },
  updateBtnWrapper: {
    alignSelf: 'flex-end',
    width: RFValue(100),
    height: RFValue(36),
  },
  updateBtnText: {
    fontSize: FONT_SIZE.MS,
  },
});

interface PropsI extends CircularProgressBarPropsI {
  value: number;
  unit: string;
  label: string;
  type: string;
  borderColor: string;
  onAddList: (type: string) => void;
}

export function PlayerStatus({
  value,
  unit,
  label,
  type,
  progress,
  diameter,
  startColor,
  endColor,
  borderColor,
  strokeWidth,
  onAddList,
}: PropsI) {
  return (
    <View style={[styles.container, {borderColor: borderColor}]}>
      <CircularProgressBar
        progress={progress}
        diameter={diameter}
        startColor={startColor}
        endColor={endColor}
        strokeWidth={strokeWidth}>
        <View style={styles.contentWrapper}>
          <View style={styles.percentWrapper}>
            <Text style={styles.percentValue}>{progress}</Text>
            <Text style={styles.percentSymbol}>%</Text>
          </View>
          <Text style={styles.labelText}>{label}</Text>
        </View>
      </CircularProgressBar>
      <View style={styles.descriptionWrapper}>
        <View style={styles.textWrapper}>
          <Text style={styles.todayText}>
            {`Today's Target: ${value.toLocaleString(undefined, {
              maximumFractionDigits: 2,
            })} ${unit}`}
          </Text>
          <Text style={styles.lastText}>{`Last Entry: ${12}:${21} pm`}</Text>
        </View>
        <RoundedGradientButton
          label={'Update'}
          onPress={() => onAddList(type)}
          startColor={COLORS.BLUE}
          endColor={COLORS.BLACK}
          customStyle={styles.updateBtnWrapper}
          textStyle={styles.updateBtnText}
        />
      </View>
    </View>
  );
}
