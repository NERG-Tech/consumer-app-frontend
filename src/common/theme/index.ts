import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../constants/StyleConstants';

const DefaultTheme = StyleSheet.create({
  headerTitle: {
    fontWeight: FONT_WEIGHT.SEMI_BOLD,
    fontSize: FONT_SIZE.L,
    color: COLORS.WHITE,
    marginTop: RFValue(16),
  },
  headerStyle: {
    height: RFValue(70),
    backgroundColor: COLORS.BLACK_MIDDLE,
  },
  headerCircleArrow: {
    width: RFValue(24),
    height: RFValue(24),
    resizeMode: 'contain',
  },
});

export default DefaultTheme;
