import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {AppStackParamList} from '../../navigation/AppStack';
import {RFValue} from 'react-native-responsive-fontsize';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {FOOD_JOURNAL} from '../../common/constants/NavigationConstants';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../common/constants/StyleConstants';
import {Button, SearchInput} from '../../common/components';
import {SearchScreen, HistoryScreen} from './sections';

type ProductSearchNavigationProp = StackNavigationProp<AppStackParamList, 'product_search'>;

const tabs = {
  search: 'Search',
  history: 'History',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: RFValue(24),
    paddingHorizontal: RFValue(16),
  },
  searchWrapper: {
    height: RFValue(60),
    borderRadius: RFValue(24),
  },
  tabsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: RFValue(20),
    width: '100%',
    marginBottom: RFValue(3),
  },
  tabWrapper: {
    flexDirection: 'column',
    width: wp(30),
    marginTop: RFValue(30),
  },
  tabText: {
    fontSize: FONT_SIZE.MS,
    fontWeight: FONT_WEIGHT.MIDDLE,
    color: COLORS.TEXT_DARK,
    paddingBottom: RFValue(12),
    backgroundColor: COLORS.TRANSPARENT,
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
  bodyWrapper: {
    flex: 1,
  },
});

function ProductSearchScreen() {
  const navigation = useNavigation<ProductSearchNavigationProp>();
  const [activeTab, setActiveTab] = useState('search');
  const [searchQuery, setSearchQuery] = useState('');

  const gotoFoodJournalScreen = () => navigation.navigate(FOOD_JOURNAL);

  return (
    <View style={styles.container}>
      <SearchInput
        value={searchQuery}
        placeholder={'Search..'}
        onChangeText={setSearchQuery}
        onSearch={(searchQuery: string) => console.log(searchQuery)}
        customStyle={styles.searchWrapper}
      />
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

      <View style={styles.bodyWrapper}>
        {activeTab === 'search' ? (
          <SearchScreen gotoFoodJournalScreen={gotoFoodJournalScreen} />
        ) : (
          <HistoryScreen />
        )}
      </View>
    </View>
  );
}

export default ProductSearchScreen;
