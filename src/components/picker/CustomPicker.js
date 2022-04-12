import React, { useState, useEffect, useImperativeHandle, forwardRef, useRef } from 'react';
import {
    View,
    Text,
    Platform,
    StyleSheet
} from 'react-native';

import { Icon, icoMoonConfigSet } from '@components/icon/Icon';
import { CustomBottomHalfModal } from '../modal/CustomModal';
import Color from '@constants/Colors';
import ScaleDimen from '@constants/ScaleDimen';
import fontFamily from '@constants/fontFamily';
import Icons from '@constants/Icons';
import RNPickerSelect from 'react-native-picker-select';
import { Picker } from '@react-native-picker/picker';
import ScaleDimen from '@constants/ScaleDimen';
import Colors from '@constants/Colors';

export const CustomPicker = (props) => {
    const { label, onchange, value, pickerItems, errorMessage, Iositems } = props;

    return (
        <View style={{ marginBottom: ScaleDimen.ms20 }}>
            <Text style={[styles.label]}>{label}</Text>
            <View style={{ flexDirection: 'row' }}>
                <View style={styles.Pickerstyle}>
                    {Platform.OS === 'android' ?
                        <Picker
                            mode={'dialog'}
                            selectedValue={value}
                            style={{
                                width: '100%', color: '#BEB4B4', transform: [
                                    // { scaleX: .9 },
                                    { scaleY: .9 },
                                ]
                            }}
                            onValueChange={onchange}
                        >
                            <Picker.Item
                                label={'Select ' + label}
                                value={'Select ' + label}
                            />
                            {pickerItems}
                        </Picker> : <RNPickerSelect
                            items={
                                // console.log(Iositems)
                                Iositems?.map((item, index) => (
                                    { key: index, label: item, value: item }
                                ))
                            }
                            placeholder={{ label: 'Select ' + label, value: '' }}
                            value={value}
                            onValueChange={onchange}
                            style={{
                                inputIOSContainer: {
                                    marginLeft: ScaleDimen.ms20
                                },

                                inputIOS: {
                                    height: ScaleDimen.ms50,

                                    // ...styles.pickerWrapper
                                },
                                iconContainer: {
                                    top: '30%',
                                    right: ScaleDimen.ms20,
                                },
                            }}
                            useNativeAndroidPickerStyle={false}
                            textInputProps={{ underlineColor: 'yellow' }}
                            Icon={() => {
                                return <Icon
                                    name={Icons.cheveron_down}
                                    color={Color.PRIMARY_COLOR}
                                    size={ScaleDimen.ms14}
                                    config={icoMoonConfigSet}
                                />;
                            }}
                        />
                    }
                </View>
            </View>
            {Boolean(errorMessage) ?
                <Text style={styles.error}>{errorMessage}</Text>
                : null}
        </View>
    )
}


const styles = StyleSheet.create({
    label: {
        fontSize: ScaleDimen.ms13,
        color: Color.PRIMARY_COLOR,
        fontFamily: fontFamily.Roboto_Bold,
        marginTop: 0,
        marginBottom: ScaleDimen.ms10,

    },

    Pickerstyle: {
        backgroundColor: Color.WHITE,
        borderColor: Color.DIM_GRAY,
        borderWidth: ScaleDimen.ms1,
        borderColor: Colors.PRIMARY_COLOR,
        justifyContent: 'center',
        height: ScaleDimen.ms50,
        width: '100%',
        padding: 0,
        fontSize: ScaleDimen.ms10,
        color: Color.DIM_GRAY,
        borderRadius: ScaleDimen.ms5
    },

})