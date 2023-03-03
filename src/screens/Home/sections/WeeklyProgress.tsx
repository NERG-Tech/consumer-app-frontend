import React from 'react';
import {Text, Image, View, ScrollView, StyleSheet} from 'react-native';
import {useTranslation} from 'react-i18next';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {RFValue} from 'react-native-responsive-fontsize';
import {Button} from '../../../common/components';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../../common/constants/StyleConstants';
import {useAssets} from '../../../hooks/useAssets';
import {PlayerStatusBar} from '../components/PlayerStatusBar';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
});

export function WeeklyProgress() {
  const {t} = useTranslation();

  return (
    <View style={styles.container}>
      <Text>Weekly Progress</Text>
    </View>
  );
}
