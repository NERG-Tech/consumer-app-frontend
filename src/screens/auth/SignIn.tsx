import React from 'react';
import {Text, Image, ImageBackground, View, StatusBar, StyleSheet} from 'react-native';
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
  backgroundImg: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: hp(6),
    paddingBottom: hp(4),
  },
  logo: {
    width: wp(60),
    resizeMode: 'contain',
  },
  stasticText: {
    fontSize: RFValue(FONT_SIZE.L),
    fontWeight: FONT_WEIGHT.LIGHT,
    color: COLORS.BLACK,
  },
  watchLogo: {
    width: wp(60),
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
    marginTop: RFValue(30),
    borderRadius: RFValue(50),
    backgroundColor: COLORS.WHITE_ALPHA,
  },
  orderBtnText: {
    fontSize: RFValue(FONT_SIZE.XL),
    fontWeight: FONT_WEIGHT.LIGHT,
    color: COLORS.BLACK,
  },
  orderBtnTextSpan: {
    fontSize: RFValue(FONT_SIZE.XL),
    fontWeight: FONT_WEIGHT.LIGHT,
    color: COLORS.BLUE,
  },
});

function SignInScreen() {
  const assets = useAssets;
  return (
    <View style={styles.container}>
      <ImageBackground source={assets('background')} style={styles.backgroundImg}>
        <Image style={styles.logo} source={assets('logo')} />
        <Text style={styles.stasticText}>Outperform your genetics.</Text>
        <Image style={styles.watchLogo} source={assets('watch_logo')} />
        <GradientButton
          label="Sign In"
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

export default SignInScreen;
