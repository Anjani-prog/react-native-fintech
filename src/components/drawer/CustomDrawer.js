import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

import {Icon, icoMoonConfigSet} from '../icon/Icon';
import ScaleDimen from '@constants/ScaleDimen';
import Icons from '@constants/Icons';
import Routes from '@navigation/Routes';
// import Images from '@config/Images';
import Colors from '@constants/Colors';
import fontFamily from '@constants/fontFamily';

export default function CustomDrawerContent(props) {
  const Array2 = [
    {
      label: 'Money Request',
      stack: Routes.MoneyRequest,
      screen: Routes.MoneyRequest,
    },
    {
      label: 'Search Recipient',
      stack: Routes.SearchRecipient,
      screen: Routes.SearchRecipient,
    },
  ];

  return (
    <DrawerContentScrollView {...props}>
      <View
        style={{
          width: '100%',
          height: ScaleDimen.ms100,
        }}></View>

      <View style={[styles.drawerWrapper]}>
        {Array2.map((item, index) => {
          return (
            <DrawerItem
              icon={({focused, color, size}) => (
                <Icon
                  name={item.icon}
                  size={ScaleDimen.ms20}
                  config={icoMoonConfigSet}
                  style={[styles.drawerIcon, {color: Colors.PRIMARY_COLOR}]}
                />
              )}
              label={({focused, color}) => (
                <Text
                  style={[styles.drawerLabel, {color: Colors.PRIMARY_COLOR}]}>
                  {item.label}
                </Text>
              )}
              onPress={() =>
                props.navigation.navigate(
                  item.stack,
                  item.screen && {
                    screen: item.screen,
                    params: {
                      statusBarIdenti: item.params ? item.params : '',
                    },
                  },
                )
              }
              style={[styles.drawerItem, {}]}
              key={index}
            />
          );
        })}
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  drawerIcon: {
    color: Colors.BGCOLOR,
  },
  drawerItem: {
    padding: ScaleDimen.ms5,
    backgroundColor: Colors.BLUE1,
  },
  drawerLabel: {
    fontFamily: fontFamily.Roboto_Bold,
    fontSize: ScaleDimen.ms14,
    color: Colors.PRIMARY_COLOR,
    left: ScaleDimen.ms5,
  },
  drawerWrapper: {
    height: '50%',
    // backgroundColor: 'red'
  },
  row: {
    flexDirection: 'row',
  },
});
