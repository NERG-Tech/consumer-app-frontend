import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useTranslation} from 'react-i18next';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {RFValue} from 'react-native-responsive-fontsize';
import {COLORS} from '../../../common/constants/StyleConstants';
import {PlayerStatus} from '../components/PlayerStatus';

const styles = StyleSheet.create({
  progressBarsWrapper: {
    flexDirection: 'column',
    gap: RFValue(16),
    marginVertical: RFValue(30),
  },
  progressBarRowWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

type TProps = {
  gotoJournalScreen: (type: string) => void;
};

export function DailyTargets(props: TProps) {
  const {t} = useTranslation();

  return (
    <View style={styles.progressBarsWrapper}>
      <View style={styles.progressBarRowWrapper}>
        <PlayerStatus
          value={125}
          unit={'oz'}
          label={t('home.wi')}
          type={'hydration'}
          progress={75}
          diameter={wp(35)}
          startColor={COLORS.GRADIENT_SKY}
          endColor={COLORS.GRADIENT_SKY_DARK}
          borderColor={COLORS.GRADIENT_SKY}
          onAddList={(type: string) => props.gotoJournalScreen(type)}
        />
      </View>
      <View style={styles.progressBarRowWrapper}>
        <PlayerStatus
          value={2000}
          unit={'cal'}
          label={t('home.ci')}
          type={'food'}
          progress={75}
          diameter={wp(35)}
          startColor={COLORS.GRADIENT_RED}
          endColor={COLORS.GRADIENT_ORANGE}
          borderColor={COLORS.GRADIENT_ORANGE}
          onAddList={(type: string) => props.gotoJournalScreen(type)}
        />
      </View>
      <View style={styles.progressBarRowWrapper}>
        <PlayerStatus
          value={60}
          unit={'min'}
          label={t('home.ha')}
          type={'activity'}
          progress={75}
          diameter={wp(35)}
          startColor={COLORS.GRADIENT_PURPLE}
          endColor={COLORS.GRADIENT_GREEN}
          borderColor={COLORS.GRADIENT_GREEN}
          onAddList={(type: string) => props.gotoJournalScreen(type)}
        />
      </View>
      <View style={styles.progressBarRowWrapper}>
        <PlayerStatus
          value={20}
          unit={'min'}
          label={t('home.rt')}
          type={'rest'}
          progress={75}
          diameter={wp(35)}
          startColor={COLORS.GRADIENT_PURPLE}
          endColor={COLORS.GRADIENT_PURPLE_MIDDLE}
          borderColor={COLORS.GRADIENT_PURPLE_MIDDLE}
          onAddList={(type: string) => props.gotoJournalScreen(type)}
        />
      </View>
    </View>
  );
}
