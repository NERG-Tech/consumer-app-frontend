import React, {useState} from 'react';
import {
  Text,
  Image,
  View,
  ScrollView,
  StyleSheet,
  Platform,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {RFValue} from 'react-native-responsive-fontsize';
import {useAssets} from '../../../hooks/useAssets';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../../common/constants/StyleConstants';
import {Button} from '../../../common/components';
import NewUserScreen from './NewUser';
import ExistingUserScreen from './ExistingUser';

const tabs = {
  existingUser: 'Existing User',
  newUser: 'New User',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: COLORS.BACKGROUND_LIGHT,
  },
  upSideWrapper: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: hp(6),
  },
  logo: {
    width: wp(60),
    resizeMode: 'contain',
  },
  watch: {
    width: wp(30),
    height: hp(25),
    resizeMode: 'contain',
    marginVertical: hp(2),
  },
  downSideWrapper: {
    flex: 1,
    width: '100%',
  },
  tabsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: RFValue(8),
    paddingHorizontal: wp(5),
  },
  tabWrapper: {
    flexDirection: 'column',
    width: wp(42),
  },
  tabText: {
    fontSize: FONT_SIZE.MS,
    fontWeight: FONT_WEIGHT.MIDDLE,
    color: COLORS.TEXT_DARK,
    paddingVertical: RFValue(8),
  },
  tabBottom: {
    width: '100%',
    height: RFValue(6),
    borderRadius: RFValue(3),
    borderWidth: RFValue(1),
    borderColor: COLORS.BORDER_ALPHA,
    backgroundColor: COLORS.WHITE_ALPHA,
    elevation: 2,
    shadowOpacity: 1,
    shadowRadius: 4,
    shadowColor: COLORS.BLACK_LIGHT,
    shadowOffset: {width: 2, height: 2},
  },
  tabActiveBottom: {
    width: '100%',
    height: RFValue(6),
    borderRadius: RFValue(3),
    backgroundColor: COLORS.BLUE_LIGHT,
    elevation: 2,
    shadowOpacity: 1,
    shadowRadius: 4,
    shadowColor: COLORS.BLACK_LIGHT,
    shadowOffset: {width: 2, height: 2},
  },
  subScreenWrapper: {
    flex: 1,
    width: '100%',
  },
});

function SignInScreen() {
  const [activeTab, setActiveTab] = useState('existingUser');
  const assets = useAssets;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={{flex: 1}}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            flex: 1,
          }}
          contentContainerStyle={{
            flexGrow: 1,
          }}
          keyboardShouldPersistTaps={'handled'}>
          <View style={styles.container}>
            <View style={styles.upSideWrapper}>
              <Image style={styles.logo} source={assets('main.logo')} />
              <Image style={styles.watch} source={assets('main.watch_logo')} />
            </View>
            <View style={styles.downSideWrapper}>
              <View style={styles.tabsWrapper}>
                {Object.keys(tabs).map((tab: string, i: number) => (
                  <Button key={i} customStyle={styles.tabWrapper} onPress={() => setActiveTab(tab)}>
                    <Text style={styles.tabText}>{tabs[tab]}</Text>
                    {activeTab === tab ? (
                      <View style={styles.tabActiveBottom} />
                    ) : (
                      <View style={styles.tabBottom} />
                    )}
                  </Button>
                ))}
              </View>
              <View style={styles.subScreenWrapper}>
                {activeTab === 'existingUser' ? <ExistingUserScreen /> : <NewUserScreen />}
              </View>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

export default SignInScreen;
