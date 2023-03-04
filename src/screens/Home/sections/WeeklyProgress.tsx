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
import {AttributeInput, AttributeSelect} from '../../../common/components';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
});

export function WeeklyProgress() {
  const {t} = useTranslation();
  const assets = useAssets;

  const [value, setValue] = useState('');
  const [select, setSelect] = useState('');
  const options = {
    male: 'Male',
    female: 'Female',
  };

  return (
    <View style={styles.container}>
      <View style={{flex: 1, flexDirection: 'row', gap: RFValue(10), marginBottom: RFValue(10)}}>
        <AttributeInput
          label={'Gender'}
          value={value}
          onChangeText={(text: string) => setValue(text)}
        />
        <AttributeSelect
          value={select}
          label="M"
          options={options}
          onSelectValue={(selectedValue: string) => setSelect(selectedValue)}
        />
      </View>
      <AttributeSelect
        value={select}
        label="M"
        options={options}
        onSelectValue={(selectedValue: string) => setSelect(selectedValue)}
      />
      <View style={{flex: 1, flexDirection: 'row', gap: RFValue(10), marginTop: RFValue(10)}}>
        <AttributeSelect
          value={select}
          label="M"
          options={options}
          onSelectValue={(selectedValue: string) => setSelect(selectedValue)}
        />
        <AttributeInput
          label={'Working Hours Per Day'}
          value={'6'}
          textStyle={{flex: 0, paddingHorizontal: RFValue(15)}}
        />
      </View>
    </View>
  );
}
