import React from 'react';
import {View, Text, StyleSheet, ViewStyle, Image} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {COLORS, FONT_WEIGHT, FONT_SIZE} from '../../../common/constants/StyleConstants';
import {useAssets} from '../../../hooks/useAssets';
import {Button} from '../../../common/components';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: RFValue(20),
    marginBottom: RFValue(16),
    paddingVertical: RFValue(16),
    paddingHorizontal: RFValue(20),
    borderColor: COLORS.BLUE_SKY,
    borderWidth: RFValue(1),
    borderRadius: RFValue(24),
    backgroundColor: COLORS.WHITE,
  },
  infoWrapper: {
    flexDirection: 'column',
  },
  infoTitle: {
    fontSize: FONT_SIZE.MS,
    fontWeight: FONT_WEIGHT.SEMI_BOLD,
    color: COLORS.BLACK,
  },
  infoSizeTitle: {
    fontSize: FONT_SIZE.XS,
    fontWeight: FONT_WEIGHT.MIDDLE,
    color: COLORS.TEXT_DARK,
  },
  infoSizeContent: {
    fontSize: FONT_SIZE.XS,
    fontWeight: FONT_WEIGHT.LIGHT,
    color: COLORS.TEXT_DARK,
  },
  infoDateTitle: {
    fontSize: FONT_SIZE.XS,
    fontWeight: FONT_WEIGHT.MIDDLE,
    color: COLORS.TEXT_DARK_MIDDLE,
  },
  infoDateContent: {
    fontSize: FONT_SIZE.XS,
    fontWeight: FONT_WEIGHT.LIGHT,
    color: COLORS.TEXT_DARK_MIDDLE,
  },
  logBtnWrapper: {
    width: RFValue(90),
    height: RFValue(30),
    borderRadius: RFValue(24),
    backgroundColor: COLORS.GREEN,
    marginTop: RFValue(16),
  },
  logBtnText: {
    fontSize: FONT_SIZE.XS,
    fontWeight: FONT_WEIGHT.LIGHT,
    color: COLORS.WHITE,
  },
  diffWrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  diffContentWrapper: {
    flexDirection: 'column',
  },
  diffContentTitle: {
    fontWeight: FONT_WEIGHT.SEMI_BOLD,
    fontSize: FONT_SIZE.XS,
    color: COLORS.BLACK,
    marginBottom: RFValue(4),
  },
  diffContentRowWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  diffContentIcon: {
    width: RFValue(18),
    height: RFValue(18),
    resizeMode: 'contain',
    marginRight: RFValue(6),
  },
  diffContentText: {
    fontWeight: FONT_WEIGHT.LIGHT,
    fontSize: FONT_SIZE.XS,
    color: COLORS.BLACK,
    marginTop: RFValue(12),
  },
  shareBtnWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  shareBtnText: {
    fontWeight: FONT_WEIGHT.MIDDLE,
    fontSize: FONT_SIZE.XXS,
    color: COLORS.BLACK,
  },
  shareBtnIcon: {
    width: RFValue(12),
    height: RFValue(12),
    resizeMode: 'contain',
    tintColor: COLORS.GREY_DARK,
    marginLeft: RFValue(4),
  },
});

interface PropsI {
  title: string;
  size: number;
  date: string;
  waterDiff: number;
  caloriesDiff: number;
  activityDiff: number;
  onLogAgain: () => void;
  onShare: () => void;
  customStyle?: ViewStyle;
}

export function HistoryItem({
  title,
  size,
  date,
  waterDiff,
  caloriesDiff,
  activityDiff,
  onLogAgain,
  onShare,
  customStyle,
}: PropsI) {
  const assets = useAssets;
  return (
    <View style={[styles.container, customStyle]}>
      <View style={styles.infoWrapper}>
        <Text style={styles.infoTitle}>{title}</Text>
        <Text style={[styles.infoSizeTitle, {marginTop: RFValue(12)}]}>Serving Size:</Text>
        <Text style={styles.infoSizeContent}>{size} surface inch</Text>
        <Text style={[styles.infoDateTitle, {marginTop: RFValue(12)}]}>Entered:</Text>
        <Text style={styles.infoDateContent}>{date}</Text>
        <Button customStyle={styles.logBtnWrapper} onPress={() => onLogAgain()}>
          <Text style={styles.logBtnText}>Log Again</Text>
        </Button>
      </View>

      <View style={styles.diffWrapper}>
        <View style={styles.diffContentWrapper}>
          <Text style={styles.diffContentTitle}>Daily Target Changes</Text>
          <View style={styles.diffContentRowWrapper}>
            <Image
              source={assets('global.bubble')}
              style={[[styles.diffContentIcon, {width: RFValue(16), height: RFValue(16)}]]}
            />
            <Text style={styles.diffContentText}>Water: {waterDiff} ounces</Text>
          </View>
          <View style={styles.diffContentRowWrapper}>
            <Image
              source={assets('global.meal')}
              style={[styles.diffContentIcon, {tintColor: COLORS.GRADIENT_ORANGE}]}
            />
            <Text style={styles.diffContentText}>Calories: {caloriesDiff} cals</Text>
          </View>
          <View style={styles.diffContentRowWrapper}>
            <Image
              source={assets('global.walk')}
              style={[styles.diffContentIcon, {tintColor: COLORS.GRADIENT_GREEN}]}
            />
            <Text style={styles.diffContentText}>Healthy Activity: {activityDiff} steps</Text>
          </View>
        </View>

        <Button customStyle={styles.shareBtnWrapper} onPress={() => onShare()}>
          <Text style={styles.shareBtnText}>
            Additional data will be added to your dynamic log.
          </Text>
          <View style={styles.shareBtnIcon}>
            <Image source={assets('global.share')} style={styles.shareBtnIcon} />
          </View>
        </Button>
      </View>
    </View>
  );
}
