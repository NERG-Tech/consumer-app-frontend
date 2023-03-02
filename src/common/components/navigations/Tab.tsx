import React from 'react';
import {Image, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  icon: {
    height: 25,
    resizeMode: 'contain',
  },
});

interface PropsI {
  icon: number;
}

export function Tab({icon}: PropsI) {
  return <Image source={icon} style={styles.icon} />;
}
