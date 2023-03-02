import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {COLORS} from '../../../common/constants/StyleConstants';
import {useAssets} from '../../../hooks/useAssets';
import {Button} from '../buttons';

const styles = StyleSheet.create({
  container: {
    marginTop: RFValue(16),
  },
  logo: {
    height: 24,
    tintColor: COLORS.WHITE,
    resizeMode: 'contain',
  },
});

export function HeaderLogo() {
  const assets = useAssets;
  return (
    <Button customStyle={styles.container}>
      <Image style={styles.logo} source={assets('logo')} />
    </Button>
  );
}
