import React, {useState, useRef, useEffect} from 'react';
import {Text, Image, View, ScrollView, StyleSheet} from 'react-native';
import {useTranslation} from 'react-i18next';
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
  lungWrapper: {
    width: RFValue(60),
    height: RFValue(60),
    resizeMode: 'contain',
  },
  tabsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: RFValue(20),
    marginTop: RFValue(20),
    marginBottom: RFValue(8),
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
    borderWidth: 1,
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
  const {t} = useTranslation();

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
        <Image style={styles.playerAvatar} source={assets('player')} />
        <View style={styles.infoWrapper}>
          <Text style={styles.infoText}>
            Hello <Text style={styles.infoTextSpan}>Julieta</Text>
          </Text>
          <Text style={styles.infoText}>How are you feeling?</Text>
        </View>
        <Button onPress={() => console.log('Lungs')}>
          <Image style={styles.lungWrapper} source={assets('lungs')} />
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
