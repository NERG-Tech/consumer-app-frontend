import React, {useState} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {useTranslation} from 'react-i18next';
import {RFValue} from 'react-native-responsive-fontsize';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../common/constants/StyleConstants';
import {AttributeInput, Button, RectButton, CircularProgressBar} from '../../common/components';
import {useAssets} from '../../hooks/useAssets';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingVertical: RFValue(30),
    paddingHorizontal: RFValue(20),
  },
  bubbleWrapper: {
    alignItems: 'center',
  },
  bubbleIcon: {
    height: wp(27),
    resizeMode: 'contain',
  },
  infoWrapper: {
    flexDirection: 'column',
    marginTop: RFValue(30),
  },
  infoTitle: {
    fontSize: FONT_SIZE.MD,
    fontWeight: FONT_WEIGHT.MIDDLE,
    color: COLORS.TEXT_DARK,
    textAlign: 'center',
  },
  inputsWrapper: {
    flexDirection: 'row',
    gap: RFValue(16),
    marginTop: RFValue(16),
  },
  modifiersWrapper: {
    flexDirection: 'column',
    marginTop: RFValue(50),
  },
  modifierTitle: {
    fontWeight: FONT_WEIGHT.LIGHT,
    fontSize: FONT_SIZE.MD,
    color: COLORS.TEXT_DARK,
    textAlign: 'center',
  },
  modifierBodyWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginTop: RFValue(24),
  },
  modifierItem: {
    alignItems: 'center',
    justifyContent: 'center',
    width: wp(28),
    height: RFValue(40),
    marginBottom: RFValue(16),
    borderColor: COLORS.BORDER_ALPHA_LIGHT,
    borderWidth: RFValue(1),
    borderRadius: RFValue(16),
    backgroundColor: COLORS.WHITE,
    elevation: 2,
    shadowOpacity: 1,
    shadowRadius: 4,
    shadowColor: COLORS.BLACK_LIGHT,
    shadowOffset: {width: 2, height: 2},
  },
  modifierText: {
    fontWeight: FONT_WEIGHT.LIGHT,
    fontSize: FONT_SIZE.XS,
    color: COLORS.TEXT_DARK,
    textAlign: 'center',
  },
  saveBtnWrapper: {
    alignSelf: 'center',
    marginTop: RFValue(50),
  },
  saveBtn: {
    width: RFValue(150),
    height: RFValue(50),
    borderRadius: RFValue(50),
    backgroundColor: COLORS.GREEN,
  },
  saveBtnText: {
    fontSize: FONT_SIZE.XL,
    fontWeight: FONT_WEIGHT.MIDDLE,
    color: COLORS.WHITE,
  },
});

function HydrationJournalScreen() {
  const [volume, setVolume] = useState('');
  const {t} = useTranslation();
  const assets = useAssets;

  return (
    <View style={styles.container}>
      <View style={styles.bubbleWrapper}>
        <CircularProgressBar
          progress={0}
          diameter={wp(40)}
          startColor={COLORS.GRADIENT_SKY}
          endColor={COLORS.GRADIENT_BLUE}
          strokeWidth={2}>
          <Image source={assets('global.bubble')} style={styles.bubbleIcon} />
        </CircularProgressBar>
      </View>

      <View style={styles.infoWrapper}>
        <Text style={styles.infoTitle}>Enter your water intake.</Text>
        <View style={styles.inputsWrapper}>
          <AttributeInput
            label={'Volume'}
            value={volume}
            placeholder={'200'}
            onChangeText={(text: string) =>
              (text === '' || new RegExp(/^[0-9\b]+$/).test(text)) && setVolume(text)
            }
            textStyle={{flex: 1}}
          />
          <AttributeInput
            label={'Unit'}
            value={'Milliliter'}
            readOnly={true}
            textStyle={{flex: 1}}
          />
        </View>
      </View>

      <View style={styles.modifiersWrapper}>
        <Text style={styles.modifierTitle}>Any hydration modifiers?</Text>
        <View style={styles.modifierBodyWrapper}>
          <Button customStyle={styles.modifierItem}>
            <Text style={styles.modifierText}>Vitamins</Text>
          </Button>
          <Button customStyle={styles.modifierItem}>
            <Text style={styles.modifierText}>Supplements</Text>
          </Button>
          <Button customStyle={styles.modifierItem}>
            <Text style={styles.modifierText}>Medication</Text>
          </Button>
          <Button customStyle={styles.modifierItem}>
            <Text style={styles.modifierText}>Sports / Energy Drinks</Text>
          </Button>
          <Button customStyle={styles.modifierItem}>
            <Text style={styles.modifierText}>Soda</Text>
          </Button>
          <Button customStyle={styles.modifierItem}>
            <Text style={styles.modifierText}>Juice / Smoothie</Text>
          </Button>
        </View>
      </View>

      <View style={styles.saveBtnWrapper}>
        <RectButton customStyle={styles.saveBtn}>
          <Text style={styles.saveBtnText}>{t('general.save')}</Text>
        </RectButton>
      </View>
    </View>
  );
}

export default HydrationJournalScreen;
