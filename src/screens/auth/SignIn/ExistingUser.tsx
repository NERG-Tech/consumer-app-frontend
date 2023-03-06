import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Text, Image, Alert, View, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {RFValue} from 'react-native-responsive-fontsize';
import * as Yup from 'yup';
import {useAuth} from '../../../contexts/AuthProvider';
import {useAssets} from '../../../hooks/useAssets';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../../common/constants/StyleConstants';
import {Button, RoundedGradientButton, Input, PasswordInput} from '../../../common/components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: hp(4),
    paddingHorizontal: wp(6),
  },
  inputsWrapper: {
    flexDirection: 'column',
    gap: hp(3),
  },
  inputWrapper: {
    height: RFValue(50),
    borderRadius: RFValue(18),
  },
  rememberWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: hp(3),
  },
  rememberText: {
    fontSize: FONT_SIZE.MS,
    fontWeight: FONT_WEIGHT.MIDDLE,
    color: COLORS.TEXT_DARK,
    marginRight: RFValue(12),
  },
  rememberCheckWrapper: {
    marginRight: RFValue(12),
  },
  rememberCheck: {
    width: RFValue(30),
    height: RFValue(30),
    resizeMode: 'contain',
  },
  connectBtnWrapper: {
    width: '100%',
    alignItems: 'center',
    marginTop: hp(3),
  },
  connectBtn: {
    width: wp(60),
    height: RFValue(58),
  },
  forgotWrapper: {
    width: '100%',
    alignItems: 'center',
    marginTop: hp(5),
  },
  forgotText: {
    fontSize: FONT_SIZE.XS,
    fontWeight: FONT_WEIGHT.LIGHT,
    color: COLORS.TEXT_BLUE,
  },
});

function ExistingUserScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRemember, setRemember] = useState(false);
  const {t} = useTranslation();
  const assets = useAssets;
  const {loading, signIn} = useAuth();

  const handleRemember = () => {
    setRemember(prevState => !prevState);
  };

  const handleSignIn = async () => {
    const schema = Yup.object().shape({
      email: Yup.string().required('E-mail is required').email('Enter a valid email address'),
      password: Yup.string().required('Password is required'),
    });

    try {
      await schema.validate({email, password});
      await signIn({email, password});
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        console.log(error);
        Alert.alert('Oops!', error.message);
      } else {
        Alert.alert(
          'Authentication Error',
          'An error occurred while logging in, please check your credentials.',
        );
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputsWrapper}>
        <Input
          placeholder="E-mail"
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
          customStyle={styles.inputWrapper}
        />
        <PasswordInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          customStyle={styles.inputWrapper}
        />
      </View>
      <Button customStyle={styles.rememberWrapper} onPress={handleRemember}>
        <Text style={styles.rememberText}>{t('app.remember')}</Text>
        <View style={styles.rememberCheckWrapper}>
          {isRemember ? (
            <Image style={styles.rememberCheck} source={assets('check_active')} />
          ) : (
            <Image style={styles.rememberCheck} source={assets('check_normal')} />
          )}
        </View>
      </Button>
      <View style={styles.connectBtnWrapper}>
        <RoundedGradientButton
          label={t('app.connect')}
          loading={loading}
          onPress={handleSignIn}
          startColor={COLORS.BLUE}
          endColor={COLORS.BLACK}
          customStyle={styles.connectBtn}
        />
      </View>
      <View style={styles.forgotWrapper}>
        <Button>
          <Text style={styles.forgotText}>{t('app.forgotPassword')}</Text>
        </Button>
      </View>
    </View>
  );
}

export default ExistingUserScreen;
