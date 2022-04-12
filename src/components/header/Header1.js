import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    StatusBar,
    Platform,
    Image,
    Text
} from 'react-native';
// import Images from '@config/Images';
import Scale from '@constants/ScaleDimen';
import Colors from '@constants/Colors';
import { useDispatch, useSelector } from 'react-redux'
import ScaleDimen from '@constants/ScaleDimen';
import fontFamily from '@constants/fontFamily';
import Icons from '@constants/Icons';
import { Icon, icoMoonConfigSet } from '../icon/Icon';

export default function CustomHeader({ navigation }) {
    const userdata = useSelector((state) => state.userAuth);
    var myDate = new Date();
    var hrs = myDate.getHours();
    var greet;

    if (hrs < 12)
        greet = 'Good Morning';
    else if (hrs >= 12 && hrs <= 17)
        greet = 'Good Afternoon';
    else if (hrs >= 17 && hrs <= 24)
        greet = 'Good Evening';
    return (
        <View style={[styles.headerWrapper]}>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Icon
                        name={Icons.menu}
                        size={Scale.ms25}
                        config={icoMoonConfigSet}
                        color={Colors.PRIMARY_COLOR}
                    />
                </TouchableOpacity>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    paddingHorizontal: Scale.ms8
                }}>
                    <Text style={styles.text1}>{greet}.. </Text>

                    <Text style={styles.text2}>{userdata.first_name} </Text>
                    <Text style={styles.text1}>!</Text>
                </View>
                {/* <LottieView
                    style={{
                        position: 'relative',
                        height: ScaleDimen.ms25
                    }}
                    resizeMode={'contain'}
                    source={require("@assets/others/delivery_scooter.json")}
                    loop
                    autoPlay
                /> */}
                {/* <Image
                    style={styles.image}
                    resizeMode={'contain'}
                    source={Images.logo_EN}
                /> */}

            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    headerWrapper: {
        height: Platform.OS == 'android' ? StatusBar.currentHeight + Scale.ms0 : StatusBar.currentHeight + Scale.ms70,
        minHeight: Scale.ms50,
        alignContent: 'center',
        backgroundColor: Colors.WHITE,
        borderBottomColor: Colors.LIGHT,
        borderBottomWidth: Scale.ms1
    },
    container: {
        zIndex: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: '3%'
    },
    image: {
        height: 60,
        width: '20%'
    },
    text1: {
        fontSize: ScaleDimen.ms14,
        fontFamily: fontFamily.Roboto_BoldItalic,
        color: Colors.PRIMARY_COLOR
    },
    text2: {
        fontSize: ScaleDimen.ms14,
        fontFamily: fontFamily.Roboto_BoldItalic,
        color: Colors.DARK_RED
    }

})
