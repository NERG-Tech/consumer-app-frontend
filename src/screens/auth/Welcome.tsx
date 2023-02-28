import React from 'react';
import {useTranslation} from 'react-i18next';
import {Text, Image, ImageBackground, View, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {RFValue} from 'react-native-responsive-fontsize';
import {StackNavigationProp} from '@react-navigation/stack';
import {useAssets} from '../../hooks/useAssets';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../common/constants/StyleConstants';
import {RectButton, GradientButton} from '../../common/components';
import {AuthStackParamList} from '../../navigation/AuthStack';
import {useNavigation} from '@react-navigation/native';
import {SIGN_IN} from '../../common/constants/NavigationConstants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImg: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: hp(8),
    paddingBottom: hp(6),
  },
  logo: {
    width: wp(60),
    resizeMode: 'contain',
  },
  stasticText: {
    fontSize: FONT_SIZE.L,
    fontWeight: FONT_WEIGHT.LIGHT,
    color: COLORS.BLACK,
  },
  watchLogo: {
    width: wp(55),
    resizeMode: 'contain',
  },
  signInBtnWrapper: {
    width: wp(60),
    height: RFValue(58),
  },
  orderBtnWrapper: {
    flexDirection: 'row',
    paddingVertical: RFValue(10),
    paddingHorizontal: RFValue(20),
    marginTop: RFValue(60),
    borderRadius: RFValue(50),
    backgroundColor: COLORS.WHITE_ALPHA,
  },
  orderBtnText: {
    fontSize: FONT_SIZE.L,
    fontWeight: FONT_WEIGHT.LIGHT,
    color: COLORS.BLACK,
  },
  orderBtnTextSpan: {
    fontSize: FONT_SIZE.L,
    fontWeight: FONT_WEIGHT.LIGHT,
    color: COLORS.BLUE,
  },
});

type WelcomeScreenNavigationProp = StackNavigationProp<AuthStackParamList, 'welcome'>;

function WelcomeScreen() {
  const navigation = useNavigation<WelcomeScreenNavigationProp>();
  const assets = useAssets;
  const {t} = useTranslation();

  return (
    <View style={styles.container}>
      <ImageBackground source={assets('background')} style={styles.backgroundImg}>
        <Image style={styles.logo} source={assets('logo')} />
        <Text style={styles.stasticText}>Outperform your genetics.</Text>
        <Image style={styles.watchLogo} source={assets('watch_logo')} />
        <GradientButton
          label={t('app.signIn')}
          onPress={() => navigation.navigate(SIGN_IN)}
          startColor={COLORS.BLUE}
          endColor={COLORS.BLACK}
          customStyle={styles.signInBtnWrapper}
        />
        <RectButton customStyle={styles.orderBtnWrapper}>
          <Text style={styles.orderBtnText}>Don’t have a device? </Text>
          <Text style={styles.orderBtnTextSpan}>Order Now</Text>
        </RectButton>
      </ImageBackground>
    </View>
  );
}

export default WelcomeScreen;
