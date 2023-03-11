import React, {useState} from 'react';
import {Text, View, ScrollView, StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../common/constants/StyleConstants';
import {RestItem} from './components';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    paddingTop: RFValue(24),
    paddingHorizontal: RFValue(16),
  },
  titleText: {
    fontSize: FONT_SIZE.MS,
    fontWeight: FONT_WEIGHT.LIGHT,
    color: COLORS.TEXT_DARK,
    textAlign: 'center',
  },
  todoWrapper: {
    flexDirection: 'column',
    marginTop: RFValue(24),
  },
});

function RestJournalScreen() {
  const [isDeepStretch, setDeepStretch] = useState(false);
  const [isReduceStimulants, setReduceStimulants] = useState(false);
  const [isRelaxingHydration, setRelaxingHydration] = useState(false);
  const [isFocusedBreathing, setFocusedBreathing] = useState(false);
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.titleText}>
        Please select the activity groups you’ve completed today.
      </Text>
      <View style={styles.todoWrapper}>
        <RestItem
          title={'Deep Stretch'}
          content={'No less than 4 hours before bed time.'}
          description={
            'Starting with the neck and moving down to your ankles, stretch your muscles and roll your joints.'
          }
          icon={'global.heart_pulse'}
          iconColor={COLORS.BLACK}
          isComplete={isDeepStretch}
          onComplete={setDeepStretch}
        />
        <RestItem
          title={'Reduce Stimulants'}
          content={'No less than 2 hours before bed time.'}
          description={'Lower sounds and turn off extra lights. Give your self a mental break.'}
          icon={'global.mental_health'}
          iconColor={COLORS.BLACK}
          isComplete={isReduceStimulants}
          onComplete={setReduceStimulants}
        />
        <RestItem
          title={'Relaxing Hydration'}
          content={'No less than 1 hour before bed time.'}
          description={
            'Warm water or your relaxing favorite tea. Regulate your body temperature and relax your gut. '
          }
          icon={'global.bubble'}
          iconColor={COLORS.BLUE_LIGHT}
          isComplete={isRelaxingHydration}
          onComplete={setRelaxingHydration}
        />
        <RestItem
          title={'Focused Breathing'}
          content={'No less than 15 minutes before bed time.'}
          description={
            'Take deep controlled breaths for 15-20 minutes. Preferably while already lying down for the night.'
          }
          icon={'global.lungs'}
          iconColor={COLORS.BLACK}
          isComplete={isFocusedBreathing}
          onComplete={setFocusedBreathing}
          customStyle={{marginBottom: RFValue(40)}}
        />
      </View>
    </ScrollView>
  );
}

export default RestJournalScreen;
