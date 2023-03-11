import React from 'react';
import {Image, Text, View, StyleSheet, ViewStyle} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {RFValue} from 'react-native-responsive-fontsize';
import {useAssets} from '../../../hooks/useAssets';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../../common/constants/StyleConstants';
import {Button, GradientBorderWrapper} from '../../../common/components';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
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
    justifyContent: 'center',
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
  todoContentWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: RFValue(12),
    paddingHorizontal: RFValue(16),
  },
  iconWrapper: {
    width: RFValue(30),
    height: RFValue(30),
    resizeMode: 'contain',
  },
  contentText: {
    flex: 1,
    fontWeight: FONT_WEIGHT.LIGHT,
    fontSize: FONT_SIZE.MS,
    color: COLORS.TEXT_DARK,
    marginLeft: RFValue(16),
  },
});

interface PropsI {
  title: string;
  content: string;
  description: string;
  icon: string;
  iconColor?: string;
  isComplete: boolean;
  onComplete: (isComplete: boolean) => void;
  customStyle?: ViewStyle;
}

export function RestItem(props: PropsI) {
  const {title, content, description, icon, iconColor, isComplete, onComplete, customStyle} = props;
  const assets = useAssets;
  return (
    <View style={[styles.container, customStyle]}>
      <GradientBorderWrapper
        startColor={COLORS.GRADIENT_PURPLE}
        endColor={COLORS.GRADIENT_GREEN}
        borderWidth={2}
        borderRadius={24}
        width={wp(100) - RFValue(16) * 2}
        height={hp(16)}>
        <View style={styles.todoItemWrapper}>
          <View style={styles.descriptionWrapper}>
            <Text style={styles.todoTitleText}>{title}</Text>
            <Text style={[styles.todoContentText, {marginTop: RFValue(8)}]}>{content}</Text>
          </View>

          <View style={styles.controlWrapper}>
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
      <View style={styles.todoContentWrapper}>
        <Image source={assets(icon)} style={[styles.iconWrapper, {tintColor: iconColor}]} />
        <Text style={styles.contentText}>{description}</Text>
      </View>
    </View>
  );
}
