import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {useTranslation} from 'react-i18next';
import Svg, {Text as SvgText, Line, Rect, G} from 'react-native-svg';
import {useAssets} from '../../../../hooks/useAssets';
import {COLORS, FONT_WEIGHT, FONT_SIZE} from '../../../../common/constants/StyleConstants';
import {Button} from '../../../../common/components';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  chartsWrapper: {
    paddingVertical: RFValue(20),
    paddingHorizontal: RFValue(20),
    borderWidth: RFValue(1),
    borderRadius: RFValue(24),
    borderColor: COLORS.BLUE,
    backgroundColor: COLORS.WHITE,
    elevation: 2,
    shadowOpacity: 1,
    shadowRadius: 4,
    shadowColor: COLORS.BLACK_ALPHA,
    shadowOffset: {width: 2, height: 2},
  },
  chartTopBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  chartTopTitle: {
    fontSize: FONT_SIZE.MS,
    fontWeight: FONT_WEIGHT.MIDDLE,
    color: COLORS.TEXT_DARK,
  },
  linkWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  linkText: {
    fontSize: FONT_SIZE.XS,
    fontWeight: FONT_WEIGHT.LIGHT,
    color: COLORS.TEXT_DARK,
  },
  linkIcon: {
    width: RFValue(18),
    height: RFValue(19),
    resizeMode: 'contain',
    marginLeft: RFValue(8),
  },
  chartBodyWrapper: {
    flex: 1,
    marginTop: RFValue(20),
  },
  chartBottomWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  chartBottomText: {
    fontWeight: FONT_WEIGHT.LIGHT,
    fontSize: FONT_SIZE.MS,
    color: COLORS.TEXT_DARK,
    textAlign: 'center',
  },
  indexWrapper: {
    flexDirection: 'column',
    gap: RFValue(24),
    paddingVertical: RFValue(30),
    paddingHorizontal: RFValue(8),
  },
  indexRowWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: RFValue(18),
  },
  indexSingleWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  indexMemo: {
    width: RFValue(36),
    height: RFValue(30),
    borderTopLeftRadius: RFValue(5),
    borderTopRightRadius: RFValue(5),
  },
  indexDash: {
    width: RFValue(36),
    height: 0,
    borderTopWidth: RFValue(5),
    borderStyle: 'dashed',
  },
  indexText: {
    fontWeight: FONT_WEIGHT.LIGHT,
    fontSize: FONT_SIZE.XS,
    color: COLORS.TEXT_DARK,
    marginLeft: RFValue(15),
  },
});

export function BaseActivitiesChart() {
  const {t} = useTranslation();
  const assets = useAssets;

  const chartWidth = wp(100) - RFValue(36) * 2;
  const chartHeight = RFValue(200);
  const paddingLeft = RFValue(40);
  const paddingTop = RFValue(10);
  const verticalLabelSize = RFValue(10);
  const realChartHeight = chartHeight + paddingTop + verticalLabelSize;
  const barWidth = RFValue(26);
  const chartsGroupWidth = barWidth * 3 + RFValue(30);

  const calcYPos = (val: number) => paddingTop + ((100 - val) * chartHeight) / 100;
  const calcHeight = (val: number) => (val * chartHeight) / 100;

  const innerGridLine = (percent: number, redLine?: boolean) => {
    const height = calcYPos(percent);
    return (
      <G key={Math.random()}>
        <SvgText
          origin={`0, ${height}`}
          rotation={0}
          x={RFValue(30)}
          y={height + verticalLabelSize / 2}
          textAnchor={'end'}
          fontSize={verticalLabelSize}
          fill={redLine ? COLORS.TEXT_RED : COLORS.TEXT_DARK}>
          {`${percent} %`}
        </SvgText>
        <Line
          key={Math.random()}
          x1={paddingLeft}
          y1={height}
          x2={chartWidth}
          y2={height}
          stroke={redLine ? COLORS.DIVIDER_RED : COLORS.DIVIDER_GREY}
          strokeDasharray={'5, 5'}
          strokeWidth={1}
        />
      </G>
    );
  };

  const barChartGroup = (
    hydrationLevel: number,
    caloriesToConsume: number,
    healthActivity: number,
    rejuvenatingTime: number,
    left: number,
  ) => {
    const borderRadius = RFValue(5);
    const marginLeft = paddingLeft + RFValue(left);
    return (
      <G>
        <Rect
          x={marginLeft}
          y={calcYPos(hydrationLevel)}
          rx={borderRadius}
          ry={borderRadius}
          width={chartsGroupWidth}
          height={calcHeight(hydrationLevel) + borderRadius}
          fill={COLORS.CHART_BLUE}
        />
        <Rect
          x={marginLeft + RFValue(10)}
          y={calcYPos(caloriesToConsume)}
          rx={borderRadius}
          ry={borderRadius}
          width={barWidth}
          height={calcHeight(caloriesToConsume) + borderRadius}
          fill={COLORS.CHART_ORANGE}
        />
        <Rect
          x={marginLeft + barWidth + RFValue(15)}
          y={calcYPos(healthActivity)}
          rx={borderRadius}
          ry={borderRadius}
          width={barWidth}
          height={calcHeight(healthActivity) + borderRadius}
          fill={COLORS.CHART_GREEN}
        />
        <Rect
          x={marginLeft + barWidth * 2 + RFValue(20)}
          y={calcYPos(rejuvenatingTime)}
          rx={borderRadius}
          ry={borderRadius}
          width={barWidth}
          height={calcHeight(rejuvenatingTime) + borderRadius}
          fill={COLORS.CHART_PINK}
        />
        <Rect
          x={marginLeft}
          y={chartHeight + paddingTop + RFValue(1)}
          width={chartsGroupWidth}
          height={verticalLabelSize}
          fill={COLORS.BACKGROUND}
        />
      </G>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.chartsWrapper}>
        <View style={styles.chartTopBar}>
          <Text style={styles.chartTopTitle}>{t('home.myNerg')}</Text>
          <Button customStyle={styles.linkWrapper} onPress={() => console.log('Publish')}>
            <Text style={styles.linkText}>{t('home.publish')}</Text>
            <Image source={assets('global.share')} style={styles.linkIcon} />
          </Button>
        </View>

        <View style={styles.chartBodyWrapper}>
          <Svg width={chartWidth} height={realChartHeight}>
            <Rect width={chartWidth} height={realChartHeight} fill={COLORS.TRANSPARENT} />
            {[0, 20, 50, 80, 100].map((val: number) => innerGridLine(val))}
            {innerGridLine(30, true)}
            {barChartGroup(100, 70, 90, 40, 20)}
            {barChartGroup(100, 60, 90, 80, 150)}
          </Svg>
        </View>

        <View style={styles.chartBottomWrapper}>
          <Text
            style={[styles.chartBottomText, {marginLeft: RFValue(60), width: chartsGroupWidth}]}>
            Last Week
          </Text>
          <Text
            style={[
              styles.chartBottomText,
              {
                marginLeft: RFValue(130) - chartsGroupWidth,
                width: chartsGroupWidth,
              },
            ]}>
            Current Week
          </Text>
        </View>
      </View>

      <View style={styles.indexWrapper}>
        <View style={styles.indexRowWrapper}>
          <View style={styles.indexSingleWrapper}>
            <View style={[styles.indexMemo, {backgroundColor: COLORS.CHART_BLUE}]} />
            <Text style={styles.indexText}>{t('home.hl')}</Text>
          </View>
          <View style={styles.indexSingleWrapper}>
            <View style={[styles.indexMemo, {backgroundColor: COLORS.CHART_ORANGE}]} />
            <Text style={styles.indexText}>{t('home.ctc')}</Text>
          </View>
        </View>

        <View style={styles.indexRowWrapper}>
          <View style={styles.indexSingleWrapper}>
            <View style={[styles.indexMemo, {backgroundColor: COLORS.CHART_GREEN}]} />
            <Text style={styles.indexText}>{t('home.ha')}</Text>
          </View>
          <View style={styles.indexSingleWrapper}>
            <View style={[styles.indexMemo, {backgroundColor: COLORS.CHART_PINK}]} />
            <Text style={styles.indexText}>{t('home.rt')}</Text>
          </View>
        </View>

        <View style={styles.indexRowWrapper}>
          <View style={styles.indexSingleWrapper}>
            <Svg width={RFValue(36)} height={RFValue(5)}>
              <Line
                key={Math.random()}
                x1={0}
                y1={0}
                x2={RFValue(36)}
                y2={0}
                stroke={COLORS.DIVIDER_LIGHT}
                strokeDasharray={'5, 5'}
                strokeWidth={5}
              />
            </Svg>
            <Text style={styles.indexText}>{t('home.tp')}</Text>
          </View>
          <View style={styles.indexSingleWrapper}>
            <Svg width={RFValue(36)} height={RFValue(5)}>
              <Line
                key={Math.random()}
                x1={0}
                y1={0}
                x2={RFValue(36)}
                y2={0}
                stroke={COLORS.DIVIDER_RED}
                strokeDasharray={'5, 5'}
                strokeWidth={5}
              />
            </Svg>
            <Text style={styles.indexText}>{t('home.st')}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
