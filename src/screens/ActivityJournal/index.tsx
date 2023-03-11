import React, {useState} from 'react';
import {Text, View, ScrollView, StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../common/constants/StyleConstants';
import {ActivityItem} from './components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingVertical: RFValue(24),
    paddingHorizontal: RFValue(16),
  },
  titleText: {
    fontSize: FONT_SIZE.MS,
    fontWeight: FONT_WEIGHT.LIGHT,
    color: COLORS.TEXT_DARK,
  },
  todoWrapper: {
    flexDirection: 'column',
    marginTop: RFValue(24),
  },
});

function ActivityJournalScreen() {
  const [isCardio, setCardio] = useState(false);
  const [isNoWeight, setNoWeight] = useState(false);
  const [isBalance, setBalance] = useState(false);
  const [isUpperBody, setUpperBody] = useState(false);
  const [isLowerBody, setLowerBody] = useState(false);
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.titleText}>Please select the activity groups you’ve about to start.</Text>
      <View style={styles.todoWrapper}>
        <ActivityItem
          title={'Pure Cardio'}
          subTitle={'Daily:'}
          content={'Minimum 30 minutes'}
          isComplete={isCardio}
          onStart={() => console.log('Start')}
          onComplete={setCardio}
        />
        <ActivityItem
          title={'No Weight Core Strength & Mobility'}
          subTitle={'Weekly:'}
          content={'45-60 Minutes'}
          isComplete={isNoWeight}
          onStart={() => console.log('Start')}
          onComplete={setNoWeight}
        />
        <ActivityItem
          title={'Balance and Strength Training'}
          subTitle={'Weekly:'}
          content={'45-60 Minutes'}
          isComplete={isBalance}
          onStart={() => console.log('Start')}
          onComplete={setBalance}
        />
        <ActivityItem
          title={'Muscle Strengthening Activities (Upper Body)'}
          subTitle={'Weekly:'}
          content={'45-60 Minutes'}
          isComplete={isUpperBody}
          onStart={() => console.log('Start')}
          onComplete={setUpperBody}
        />
        <ActivityItem
          title={'Muscle Strengthening Activities (Lower Body)'}
          subTitle={'Weekly:'}
          content={'45-60 Minutes'}
          isComplete={isLowerBody}
          onStart={() => console.log('Start')}
          onComplete={setLowerBody}
          customStyle={{marginBottom: RFValue(50)}}
        />
      </View>
    </ScrollView>
  );
}

export default ActivityJournalScreen;
