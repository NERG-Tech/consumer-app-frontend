import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
});

export function HistoryScreen() {
  return (
    <View style={styles.container}>
      <Text style={{textAlign: 'center'}}>History</Text>
    </View>
  );
}
