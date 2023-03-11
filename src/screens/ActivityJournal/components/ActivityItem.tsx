import React from 'react';
import {Image, Text, View, StyleSheet, ViewStyle} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {RFValue} from 'react-native-responsive-fontsize';
import {useAssets} from '../../../hooks/useAssets';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../../common/constants/StyleConstants';
import {Button, GradientBorderWrapper, RoundedGradientButton} from '../../../common/components';

const styles = StyleSheet.create({
  container: {
    marginBottom: RFValue(20),
  },
  todoItemWrapper: {
    flex: 1,
    flexDirection: 'row',
    gap: RFValue(30),
    paddingVertical: RFValue(20),
    paddingHorizontal: RFValue(16),
    borderRadius: RFValue(22), // borderRadius - borderWidth : 24 - 2
  },
  descriptionWrapper: {
    flex: 1,
    flexDirection: 'column',
  },
  todoTitleText: {
    fontWeight: FONT_WEIGHT.SEMI_BOLD,
    fontSize: FONT_SIZE.MD,
    color: COLORS.TEXT_DARK,
  },
  todoContentText: {
    fontWeight: FONT_WEIGHT.LIGHT,
    fontSize: FONT_SIZE.MD,
    color: COLORS.TEXT_DARK,
  },
  controlWrapper: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  timerBtnWrapper: {
    height: hp(6),
  },
  timerBtnBodyWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: RFValue(12),
  },
  timerBtnText: {
    fontSize: FONT_SIZE.MD,
    fontWeight: FONT_WEIGHT.LIGHT,
    color: COLORS.WHITE,
    marginLeft: RFValue(8),
  },
  timerBtnIcon: {
    width: RFValue(24),
    height: RFValue(24),
    resizeMode: 'contain',
  },
  checkWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: RFValue(12),
  },
  checkText: {
    fontWeight: FONT_WEIGHT.LIGHT,
    fontSize: FONT_SIZE.MS,
    color: COLORS.GREY_DARK,
  },
  checkIcon: {
    width: RFValue(28),
    height: RFValue(28),
    resizeMode: 'contain',
  },
});

interface PropsI {
  title: string;
  subTitle: string;
  content: string;
  isComplete: boolean;
  onStart: () => void;
  onComplete: (isComplete: boolean) => void;
  customStyle?: ViewStyle;
}

export function ActivityItem(props: PropsI) {
  const {title, subTitle, content, isComplete, onStart, onComplete, customStyle} = props;
  const assets = useAssets;
  return (
    <View style={[styles.container, customStyle]}>
      <GradientBorderWrapper
        startColor={COLORS.GRADIENT_PURPLE}
        endColor={COLORS.GRADIENT_GREEN}
        borderWidth={2}
        borderRadius={24}
        width={wp(100) - RFValue(16) * 2}
        height={RFValue(160)}>
        <View style={styles.todoItemWrapper}>
          <View style={styles.descriptionWrapper}>
            <Text style={styles.todoTitleText}>{title}</Text>
            <Text style={[styles.todoTitleText, {marginTop: RFValue(20)}]}>{subTitle}</Text>
            <Text style={styles.todoContentText}>{content}</Text>
          </View>

          <View style={styles.controlWrapper}>
            <RoundedGradientButton
              customStyle={styles.timerBtnWrapper}
              startColor={COLORS.BLUE}
              endColor={COLORS.BLACK}
              onPress={() => onStart()}>
              <View style={styles.timerBtnBodyWrapper}>
                <Text style={styles.timerBtnText}>Start</Text>
                <Image source={assets('global.timer')} style={styles.timerBtnIcon} />
              </View>
            </RoundedGradientButton>
            <Button customStyle={styles.checkWrapper} onPress={() => onComplete(!isComplete)}>
              <Text style={styles.checkText}>Complete:</Text>
              {isComplete ? (
                <Image source={assets('hoc.check_active')} style={styles.checkIcon} />
              ) : (
                <Image source={assets('hoc.check_normal')} style={styles.checkIcon} />
              )}
            </Button>
          </View>
        </View>
      </GradientBorderWrapper>
    </View>
  );
}
