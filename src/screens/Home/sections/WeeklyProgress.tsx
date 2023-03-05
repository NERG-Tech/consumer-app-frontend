import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useTranslation} from 'react-i18next';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {RFValue} from 'react-native-responsive-fontsize';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../../common/constants/StyleConstants';
import {useAssets} from '../../../hooks/useAssets';
import {AttributeInput} from '../../../common/components';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  topInputsWrapper: {
    flexDirection: 'column',
    marginTop: RFValue(12),
    marginBottom: RFValue(40),
  },
  topTitle: {
    fontWeight: FONT_WEIGHT.LIGHT,
    fontSize: FONT_SIZE.L,
    color: COLORS.TEXT_DARK,
    textAlign: 'center',
  },
  topRowWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: RFValue(16),
    marginTop: RFValue(24),
  },
});

export function WeeklyProgress() {
  const {t} = useTranslation();
  const assets = useAssets;

  const [weight, setWeight] = useState<string>('');
  const [waistC, setWaistC] = useState<string>('');

  return (
    <View style={styles.container}>
      <View style={styles.topInputsWrapper}>
        <Text style={styles.topTitle}>Weekly Update:</Text>
        <View style={styles.topRowWrapper}>
          <AttributeInput
            label={t('home.weight')}
            value={weight}
            placeholder={'145 LBS'}
            onChangeText={(text: string) => setWeight(text)}
          />
          <AttributeInput
            label={t('home.waistC')}
            labelStyle={{flex: 0, width: RFValue(100)}}
            value={waistC}
            placeholder={'12 in'}
            onChangeText={(text: string) => setWaistC(text)}
          />
        </View>
      </View>
    </View>
  );
}
