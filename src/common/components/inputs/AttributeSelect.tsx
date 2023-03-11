import React, {useState, useRef} from 'react';
import {View, Text, StyleSheet, ViewStyle, TextStyle, TouchableOpacity, Modal} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../constants/StyleConstants';
import {Button} from '../buttons';
import {CheckItemList} from '../CheckItemList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  filedWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.BACKGROUND_GREY,
    height: RFValue(50),
    borderRadius: RFValue(16),
  },
  text: {
    flex: 1,
    fontSize: FONT_SIZE.MS,
    fontWeight: FONT_WEIGHT.LIGHT,
    color: COLORS.WHITE,
    paddingHorizontal: RFValue(20),
  },
  selectWrapper: {
    flexDirection: 'column',
    position: 'absolute',
    alignSelf: 'center',
    borderRadius: RFValue(16),
    zIndex: 9,
    backgroundColor: COLORS.BACKGROUND_GREY_LIGHT,
  },
  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: RFValue(16),
    borderTopRightRadius: RFValue(16),
    backgroundColor: COLORS.BACKGROUND_GREY,
  },
  headerText: {
    fontWeight: FONT_WEIGHT.LIGHT,
    fontSize: FONT_SIZE.MS,
    color: COLORS.WHITE,
    paddingVertical: RFValue(12),
  },
  bodyWrapper: {
    flexDirection: 'column',
    paddingHorizontal: RFValue(8),
    paddingBottom: RFValue(8),
    borderBottomLeftRadius: RFValue(16),
    borderBottomRightRadius: RFValue(16),
    backgroundColor: COLORS.BACKGROUND_GREY_LIGHT,
  },
  overlay: {
    width: '100%',
    height: '100%',
  },
});

type TLayout = {
  width: number;
  height: number;
  x: number;
  y: number;
};

interface PropsI {
  value: string;
  label: string;
  options: object;
  onSelectValue: (selectedValue: string) => void;
  customStyle?: ViewStyle;
  textStyle?: TextStyle;
}

export function AttributeSelect({
  value,
  label,
  options,
  onSelectValue,
  customStyle,
  textStyle,
}: PropsI) {
  const [isDropdown, setDropdown] = useState<boolean>(false);
  const [dropdownInfo, setDropdownInfo] = useState<TLayout>();
  const containerRef = useRef<View>(null);

  const toggleDropdown = (): void => {
    isDropdown ? setDropdown(false) : openDropdown();
  };

  const openDropdown = (): void => {
    setDropdown(true);
  };

  return (
    <View
      style={styles.container}
      ref={containerRef}
      onLayout={event =>
        containerRef.current &&
        containerRef.current.measure(
          (_x: number, _y: number, w: number, h: number, px: number, py: number) => {
            const layout: TLayout = {
              width: w,
              height: h,
              x: px,
              y: py,
            };

            setDropdownInfo(layout);
          },
        )
      }>
      <Button
        customStyle={StyleSheet.flatten([styles.filedWrapper, customStyle])}
        onPress={() => toggleDropdown()}>
        <Text style={StyleSheet.flatten([styles.text, textStyle])}>{value || label}</Text>
      </Button>
      <Modal visible={isDropdown} transparent animationType="none">
        <TouchableOpacity
          activeOpacity={1}
          style={styles.overlay}
          onPress={() => setDropdown(false)}
        />
        <View
          style={[
            styles.selectWrapper,
            {top: dropdownInfo?.y, left: dropdownInfo?.x, width: dropdownInfo?.width},
          ]}>
          <View style={styles.headerWrapper}>
            <Text style={styles.headerText}>Select</Text>
          </View>
          <View style={styles.bodyWrapper}>
            <CheckItemList
              selectedValue={value}
              options={options}
              onSelectItem={(value: string) => {
                onSelectValue(value);
                setTimeout(() => setDropdown(false), 150);
              }}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}
