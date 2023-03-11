import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {HistoryItem} from '../components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  scrollViewWrapper: {
    flex: 1,
    flexDirection: 'column',
  },
  historyWrapper: {
    flexDirection: 'column',
    paddingTop: RFValue(30),
  },
});

export function HistoryScreen() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollViewWrapper} showsVerticalScrollIndicator={false}>
        <View style={styles.historyWrapper}>
          <HistoryItem
            title={'Apple Pie'}
            size={1}
            date={'Monday: Mar. 5, 2023'}
            waterDiff={-0.7}
            caloriesDiff={55.94}
            activityDiff={1118}
            onLogAgain={() => console.log('Log Again')}
            onShare={() => console.log('Share')}
          />
          <HistoryItem
            title={'Apple Pie'}
            size={1}
            date={'Monday: Mar. 5, 2023'}
            waterDiff={-0.7}
            caloriesDiff={55.94}
            activityDiff={1118}
            onLogAgain={() => console.log('Log Again')}
            onShare={() => console.log('Share')}
          />
          <HistoryItem
            title={'Apple Pie'}
            size={1}
            date={'Monday: Mar. 5, 2023'}
            waterDiff={-0.7}
            caloriesDiff={55.94}
            activityDiff={1118}
            onLogAgain={() => console.log('Log Again')}
            onShare={() => console.log('Share')}
          />
        </View>
      </ScrollView>
    </View>
  );
}
