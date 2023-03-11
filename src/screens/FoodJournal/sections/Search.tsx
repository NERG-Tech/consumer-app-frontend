import React, {useState} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {SearchInput} from '../../../common/components/inputs/SearchInput';
import {SearchItem} from '../components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  searchWrapper: {
    height: RFValue(60),
    borderRadius: RFValue(24),
  },
  scrollViewWrapper: {
    flex: 1,
    flexDirection: 'column',
    marginTop: RFValue(3),
  },
  resultWrapper: {
    flexDirection: 'column',
    paddingTop: RFValue(20),
  },
});

export function SearchScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <View style={styles.container}>
      <SearchInput
        value={searchQuery}
        placeholder={'Search..'}
        onChangeText={setSearchQuery}
        onSearch={(searchQuery: string) => console.log(searchQuery)}
        customStyle={styles.searchWrapper}
      />
      <ScrollView style={styles.scrollViewWrapper} showsVerticalScrollIndicator={false}>
        <View style={styles.resultWrapper}>
          <SearchItem
            title={'Apple Pie'}
            description={'Cakes and pies'}
            size={2}
            onSelect={() => {}}
          />
          <SearchItem
            title={'Apple Pie'}
            description={'Cakes and pies'}
            property={'Fast Food'}
            size={2}
            onSelect={() => {}}
          />
          <SearchItem
            title={'Apple Pie'}
            description={'Cakes and pies'}
            property={'Filling'}
            size={2}
            onSelect={() => {}}
          />
          <SearchItem
            title={'Apple Pie'}
            description={'Cakes and pies'}
            property={'Pie Crust'}
            size={2}
            onSelect={() => {}}
          />
          <SearchItem
            title={'Apple Pie'}
            description={'Cakes and pies'}
            property={'Pie Crust'}
            size={2}
            onSelect={() => {}}
          />
        </View>
      </ScrollView>
    </View>
  );
}
