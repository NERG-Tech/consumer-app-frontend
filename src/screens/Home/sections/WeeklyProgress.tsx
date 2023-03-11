import React, {useState} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {useTranslation} from 'react-i18next';
import {useAssets} from '../../../hooks/useAssets';
import {RFValue} from 'react-native-responsive-fontsize';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../../common/constants/StyleConstants';
import {AttributeInput, Button} from '../../../common/components';
import {BaseActivitiesChart, StakeUpChart} from './Charts';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  topInputsWrapper: {
    flexDirection: 'column',
    marginTop: RFValue(20),
    marginBottom: RFValue(20),
    paddingVertical: RFValue(20),
    paddingHorizontal: RFValue(12),
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
  topTitleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  topTitle: {
    fontWeight: FONT_WEIGHT.LIGHT,
    fontSize: FONT_SIZE.MD,
    color: COLORS.TEXT_DARK,
  },
  chartIcon: {
    width: RFValue(24),
    height: RFValue(24),
    resizeMode: 'contain',
  },
  topRowWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: RFValue(16),
    marginTop: RFValue(20),
  },
  chartsWrapper: {
    flexDirection: 'column',
    marginBottom: RFValue(24),
  },
  inputStyle: {
    width: '50%',
  },
});

interface PropsI {
  gotoMeasurementScreen: () => void;
}

export function WeeklyProgress(props: PropsI) {
  const assets = useAssets;
  const {t} = useTranslation();

  const [weight, setWeight] = useState<string>('');
  const [waist, setWaist] = useState<string>('');
  const [hips, setHips] = useState<string>('');
  const [chest, setChest] = useState<string>('');

  return (
    <View style={styles.container}>
      <View style={styles.topInputsWrapper}>
        <View style={styles.topTitleWrapper}>
          <Text style={styles.topTitle}>Measurement Updates</Text>
          <Button onPress={() => props.gotoMeasurementScreen()}>
            <Image source={assets('global.chart')} style={styles.chartIcon} />
          </Button>
        </View>
        <View style={styles.topRowWrapper}>
          <AttributeInput
            label={t('home.chest')}
            labelStyle={styles.inputStyle}
            textStyle={styles.inputStyle}
            value={chest}
            placeholder={'34 in'}
            onChangeText={(text: string) => setChest(text)}
          />
          <AttributeInput
            label={t('home.waist')}
            labelStyle={styles.inputStyle}
            textStyle={styles.inputStyle}
            value={waist}
            placeholder={'34 in'}
            onChangeText={(text: string) => setWaist(text)}
          />
        </View>
        <View style={styles.topRowWrapper}>
          <AttributeInput
            label={t('home.hips')}
            labelStyle={styles.inputStyle}
            textStyle={styles.inputStyle}
            value={hips}
            placeholder={'34 in'}
            onChangeText={(text: string) => setHips(text)}
          />
          <AttributeInput
            label={t('home.weight')}
            labelStyle={styles.inputStyle}
            textStyle={styles.inputStyle}
            value={weight}
            placeholder={'145 LBS'}
            onChangeText={(text: string) => setWeight(text)}
          />
        </View>
      </View>
      <View style={styles.chartsWrapper}>
        <BaseActivitiesChart />
        <StakeUpChart />
      </View>
    </View>
  );
}
