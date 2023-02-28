import React from 'react';
import {useTranslation} from 'react-i18next';
import {Text, View, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {RFValue} from 'react-native-responsive-fontsize';
import {useAssets} from '../../hooks/useAssets';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../common/constants/StyleConstants';
import {RectButton, GradientButton} from '../../common/components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

function SignInScreen() {
  const assets = useAssets;
  const {t} = useTranslation();

  return (
    <View style={styles.container}>
      <Text style={{textAlign: 'center'}}>SignIn</Text>
    </View>
  );
}

export default SignInScreen;
