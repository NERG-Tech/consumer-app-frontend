import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {SearchItem} from '../components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  scrollViewWrapper: {
    flex: 1,
    flexDirection: 'column',
  },
  resultWrapper: {
    flexDirection: 'column',
    paddingTop: RFValue(30),
  },
});

interface PropsI {
  gotoFoodJournalScreen: () => void;
}

export function SearchScreen(props: PropsI) {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollViewWrapper} showsVerticalScrollIndicator={false}>
        <View style={styles.resultWrapper}>
          <SearchItem
            title={'Apple Pie'}
            description={'Cakes and pies'}
            size={2}
            onSelect={() => props.gotoFoodJournalScreen()}
          />
          <SearchItem
            title={'Apple Pie'}
            description={'Cakes and pies'}
            property={'Fast Food'}
            size={2}
            onSelect={() => props.gotoFoodJournalScreen()}
          />
          <SearchItem
            title={'Apple Pie'}
            description={'Cakes and pies'}
            property={'Filling'}
            size={2}
            onSelect={() => props.gotoFoodJournalScreen()}
          />
          <SearchItem
            title={'Apple Pie'}
            description={'Cakes and pies'}
            property={'Pie Crust'}
            size={2}
            onSelect={() => props.gotoFoodJournalScreen()}
          />
          <SearchItem
            title={'Apple Pie'}
            description={'Cakes and pies'}
            property={'Pie Crust'}
            size={2}
            onSelect={() => props.gotoFoodJournalScreen()}
          />
        </View>
      </ScrollView>
    </View>
  );
}
