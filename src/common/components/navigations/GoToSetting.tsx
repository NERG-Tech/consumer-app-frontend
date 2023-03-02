import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {useAssets} from '../../../hooks/useAssets';
import {Button} from '../buttons';

const styles = StyleSheet.create({
  container: {
    marginTop: RFValue(16),
    marginLeft: RFValue(28),
  },
  setting: {
    height: 20,
    resizeMode: 'contain',
  },
});

interface PropsI {
  navigation: any;
}

export function GoToSetting({navigation}: PropsI) {
  const assets = useAssets;
  return (
    <Button customStyle={styles.container} onPress={() => navigation.navigate('settings')}>
      <Image style={styles.setting} source={assets('setting')} />
    </Button>
  );
}
