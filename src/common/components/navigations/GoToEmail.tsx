import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {useAssets} from '../../../hooks/useAssets';
import {Button} from '../buttons';

const styles = StyleSheet.create({
  container: {
    marginTop: RFValue(16),
    marginRight: RFValue(24),
  },
  email: {
    width: 20,
    resizeMode: 'contain',
  },
});

interface PropsI {
  navigation: any;
}

export function GoToEmail({navigation}: PropsI) {
  const assets = useAssets;
  return (
    <Button customStyle={styles.container} onPress={() => navigation.navigate('notifications')}>
      <Image style={styles.email} source={assets('main.e-mail')} />
    </Button>
  );
}
