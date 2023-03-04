import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useTranslation} from 'react-i18next';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {RFValue} from 'react-native-responsive-fontsize';
import {COLORS} from '../../../common/constants/StyleConstants';
import {PlayerStatusBar} from '../components/PlayerStatusBar';

const styles = StyleSheet.create({
  progressBarsWrapper: {
    flexDirection: 'column',
    gap: hp(4),
    marginVertical: RFValue(30),
  },
  progressBarRowWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export function DailyTargets() {
  const {t} = useTranslation();

  return (
    <View style={styles.progressBarsWrapper}>
      <View style={styles.progressBarRowWrapper}>
        <PlayerStatusBar
          label={t('home.htc')}
          progress={75}
          diameter={wp(43)}
          startColor={COLORS.GRADIENT_SKY}
          endColor={COLORS.GRADIENT_SKY_DARK}
          onAddList={() => console.log(t('home.htc'))}
        />
        <PlayerStatusBar
          label={t('home.ctc')}
          progress={30}
          diameter={wp(43)}
          startColor={COLORS.GRADIENT_RED}
          endColor={COLORS.GRADIENT_ORANGE}
          onAddList={() => console.log(t('home.ctc'))}
        />
      </View>
      <View style={styles.progressBarRowWrapper}>
        <PlayerStatusBar
          label={t('home.ha')}
          progress={60}
          diameter={wp(43)}
          startColor={COLORS.GRADIENT_PURPLE}
          endColor={COLORS.GRADIENT_GREEN}
          onAddList={() => console.log(t('home.ha'))}
        />
        <PlayerStatusBar
          label={t('home.rt')}
          progress={100}
          diameter={wp(43)}
          startColor={COLORS.GRADIENT_PURPLE}
          endColor={COLORS.GRADIENT_PURPLE_MIDDLE}
          onAddList={() => console.log(t('home.rt'))}
        />
      </View>
    </View>
  );
}
