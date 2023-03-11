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
    marginHorizontal: -RFValue(16),
  },
  chartsWrapper: {
    paddingVertical: RFValue(20),
    paddingHorizontal: RFValue(30),
    borderWidth: RFValue(1),
    borderColor: COLORS.BORDER_ALPHA_LIGHT,
  },
  chartTopBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  chartTopTitle: {
    flex: 1,
    fontSize: FONT_SIZE.MD,
    fontWeight: FONT_WEIGHT.LIGHT,
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
    width: RFValue(60),
    marginHorizontal: RFValue(12),
  },
  groupIcon: {
    width: RFValue(19),
    height: RFValue(19),
    resizeMode: 'contain',
    tintColor: COLORS.BLACK,
  },
  dropDownIcon: {
    width: RFValue(20),
    height: RFValue(20),
    resizeMode: 'contain',
  },
  chartBodyWrapper: {
    flex: 1,
    marginTop: RFValue(20),
  },
});

export function StakeUpChart() {
  const {t} = useTranslation();
  const assets = useAssets;

  const chartWidth = wp(100) - RFValue(30) * 2;
  const chartHeight = RFValue(200);
  const paddingLeft = RFValue(40);
  const paddingTop = RFValue(10);
  const verticalLabelSize = RFValue(10);
  const realChartHeight = chartHeight + paddingTop + verticalLabelSize;
  const barWidth = RFValue(32);

  const calcYPos = (val: number) => paddingTop + ((100 - val) * chartHeight) / 100;
  const calcHeight = (val: number) => (val * chartHeight) / 100;

  const innerGridLine = (percent: number) => {
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
          fill={COLORS.TEXT_DARK}>
          {`${percent} %`}
        </SvgText>
        <Line
          key={Math.random()}
          x1={paddingLeft}
          y1={height}
          x2={chartWidth}
          y2={height}
          stroke={COLORS.DIVIDER_GREY}
          strokeDasharray={'5, 5'}
          strokeWidth={1}
        />
      </G>
    );
  };

  const barChartGroup = (average: number, similarUser: number, proUser: number) => {
    const borderRadius = RFValue(5);
    const marginLeft = paddingLeft + RFValue(20);
    return (
      <G>
        <Rect
          x={marginLeft}
          y={calcYPos(average)}
          rx={borderRadius}
          ry={borderRadius}
          width={barWidth}
          height={calcHeight(average) + borderRadius}
          fill={COLORS.CHART_GREY_DARK}
        />
        <Rect
          x={marginLeft + barWidth + RFValue(10)}
          y={calcYPos(similarUser)}
          rx={borderRadius}
          ry={borderRadius}
          width={barWidth}
          height={calcHeight(similarUser) + borderRadius}
          fill={COLORS.CHART_ORANGE}
        />
        <Rect
          x={marginLeft + barWidth * 2 + RFValue(20)}
          y={calcYPos(proUser)}
          rx={borderRadius}
          ry={borderRadius}
          width={barWidth}
          height={calcHeight(proUser) + borderRadius}
          fill={COLORS.CHART_BLUE}
        />
        <Rect
          x={marginLeft}
          y={chartHeight + paddingTop + RFValue(1)}
          width={barWidth * 3 + RFValue(20)}
          height={verticalLabelSize}
          fill={COLORS.BACKGROUND}
        />
      </G>
    );
  };

  const barIndex = (pos: number, label: string, color: string) => {
    const marginLeft = RFValue(120);
    const borderRadius = RFValue(15);
    const height = RFValue(36);
    const width = RFValue(100);

    return (
      <G>
        <Rect
          x={marginLeft + barWidth * 2 + RFValue(20)}
          y={calcYPos(pos) - height / 2}
          rx={borderRadius}
          ry={borderRadius}
          width={width}
          height={height}
          fill={color}
        />
        <SvgText
          origin={`${0}, ${0}`}
          rotation={0}
          x={marginLeft + barWidth * 2 + RFValue(20) + width / 2}
          y={calcYPos(pos) + RFValue(4)}
          textAnchor={'middle'}
          fontSize={RFValue(10)}
          fontWeight={FONT_WEIGHT.BOLD}
          fill={COLORS.WHITE}>
          {label}
        </SvgText>
      </G>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.chartsWrapper}>
        <View style={styles.chartTopBar}>
          <Text style={styles.chartTopTitle}>{t('home.stackUp')}</Text>
          <Button customStyle={styles.linkWrapper} onPress={() => console.log('Publish')}>
            <Image source={assets('main.group_normal_tab')} style={styles.groupIcon} />
            <Text style={styles.linkText}>{t('home.faf')}</Text>
            <Image source={assets('hoc.circle_drop_down')} style={styles.dropDownIcon} />
          </Button>
        </View>

        <View style={styles.chartBodyWrapper}>
          <Svg width={chartWidth} height={realChartHeight}>
            <Rect width={chartWidth} height={realChartHeight} fill={COLORS.TRANSPARENT} />
            {[0, 20, 50, 80, 100].map((val: number) => innerGridLine(val))}
            {barChartGroup(85, 55, 90)}
            <G>
              {barIndex(20, t('home.similarUser'), COLORS.CHART_BLUE)}
              {barIndex(50, t('home.faf'), COLORS.CHART_ORANGE)}
              {barIndex(80, t('home.avg'), COLORS.CHART_GREY_DARK)}
            </G>
          </Svg>
        </View>
      </View>
    </View>
  );
}
