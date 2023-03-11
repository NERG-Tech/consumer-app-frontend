import React, {useState, useRef, useEffect} from 'react';
import {Text, Image, View, ScrollView, StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {Button} from '../../common/components';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../common/constants/StyleConstants';
import {useAssets} from '../../hooks/useAssets';

import {DailyTargets, WeeklyProgress} from './sections';

const tabs = {
  dailyTargets: 'Daily Targets',
  weeklyProgress: 'Weekly Progress',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: RFValue(24),
    paddingHorizontal: RFValue(16),
  },
  scrollViewContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  playerHelloWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  playerAvatar: {
    width: RFValue(80),
    height: RFValue(80),
    resizeMode: 'contain',
    borderRadius: RFValue(40),
  },
  infoWrapper: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: RFValue(8),
  },
  infoText: {
    fontWeight: FONT_WEIGHT.LIGHT,
    fontSize: FONT_SIZE.MD,
    color: COLORS.TEXT_DARK,
  },
  infoTextSpan: {
    fontWeight: FONT_WEIGHT.BOLD,
  },
  healthWrapper: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: RFValue(12),
    borderWidth: RFValue(1),
    borderColor: COLORS.BORDER_ALPHA_LIGHT,
    borderRadius: RFValue(20),
  },
  lungWrapper: {
    width: RFValue(28),
    height: RFValue(27),
    resizeMode: 'contain',
    tintColor: COLORS.BLUE,
  },
  healthBottomWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: RFValue(8),
  },
  healthBottomText: {
    fontSize: FONT_SIZE.XS,
    fontWeight: FONT_WEIGHT.LIGHT,
    color: COLORS.TEXT_DARK_MIDDLE,
    marginRight: RFValue(4),
  },
  healthBottomIcon: {
    width: RFValue(12),
    height: RFValue(12),
    resizeMode: 'contain',
  },
  tabsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: RFValue(20),
    marginTop: RFValue(20),
    marginBottom: RFValue(16),
  },
  tabWrapper: {
    flex: 1,
    flexDirection: 'column',
  },
  tabText: {
    fontSize: FONT_SIZE.MS,
    fontWeight: FONT_WEIGHT.MIDDLE,
    color: COLORS.TEXT_DARK,
    paddingVertical: RFValue(10),
  },
  tabBottom: {
    width: '100%',
    height: RFValue(8),
    borderRadius: RFValue(4),
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
    height: RFValue(8),
    borderRadius: RFValue(4),
    backgroundColor: COLORS.BLUE_LIGHT,
    elevation: 2,
    shadowOpacity: 1,
    shadowRadius: 4,
    shadowColor: COLORS.BLACK_LIGHT,
    shadowOffset: {width: 2, height: 2},
  },
});

function HomeScreen() {
  const [activeTab, setActiveTab] = useState('dailyTargets');
  const scrollRef = useRef<ScrollView>(null);
  const assets = useAssets;

  useEffect(() => gotoScrollViewTop(), [activeTab]);

  const gotoScrollViewTop = () => {
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.playerHelloWrapper}>
        <Image style={styles.playerAvatar} source={assets('global.player')} />
        <View style={styles.infoWrapper}>
          <Text style={styles.infoText}>
            Hello <Text style={styles.infoTextSpan}>Julieta</Text>
          </Text>
          <Text style={styles.infoText}>How are you feeling?</Text>
        </View>
        <Button customStyle={styles.healthWrapper} onPress={() => console.log('Lungs')}>
          <Image style={styles.lungWrapper} source={assets('global.lungs')} />
          <View style={styles.healthBottomWrapper}>
            <Text style={styles.healthBottomText}>My Health</Text>
            <Image source={assets('hoc.circle_drop_right')} style={styles.healthBottomIcon} />
          </View>
        </Button>
      </View>

      <View style={styles.tabsWrapper}>
        {Object.keys(tabs).map((tab: string, i: number) => (
          <Button key={i} customStyle={styles.tabWrapper} onPress={() => setActiveTab(tab)}>
            <Text style={styles.tabText}>{tabs[tab]}</Text>
            <View style={activeTab === tab ? styles.tabActiveBottom : styles.tabBottom} />
          </Button>
        ))}
      </View>

      <ScrollView
        ref={scrollRef}
        style={styles.scrollViewContainer}
        showsVerticalScrollIndicator={false}>
        {activeTab === 'dailyTargets' ? <DailyTargets /> : <WeeklyProgress />}
      </ScrollView>
    </View>
  );
}

export default HomeScreen;
