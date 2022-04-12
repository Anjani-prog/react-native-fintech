import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native'
import DatePicker from 'react-native-date-picker'
import ScaleDimen from '@constants/ScaleDimen';
import fontFamily from '@constants/fontFamily';
import ScaleDimen from '@constants/ScaleDimen';
import Colors from '@constants/Colors';
import { Icon, icoMoonConfigSet } from '@components/icon/Icon';
import Icons from '@constants/Icons';

export const Datepicker = (props) => {
    const { label, date, setDate, errorMessage, minimumDate, maximumDate, value } = props;
    const [open, setOpen] = useState(false)

    return (
        <View style={{ marginBottom: ScaleDimen.ms20 }}>
            <Text style={[styles.label]}>{label}</Text>
            <View style={[styles.Pickerstyle,]}>
                <TouchableOpacity style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }} onPress={() => setOpen(true)}>
                    <Text style={styles.date}>{value}</Text>
                    <Icon
                        name={Icons.cheveron_down}
                        style={{ paddingRight: '5%' }}
                        color={Colors.PRIMARY_COLOR}
                        size={ScaleDimen.ms15}
                        config={icoMoonConfigSet}
                    />
                </TouchableOpacity>
            </View>
            <DatePicker
                modal
                title={label}
                androidVariant={'iosClone'}
                textColor={Colors.PRIMARY_COLOR}
                minimumDate={minimumDate}
                maximumDate={maximumDate}
                open={open}
                date={date}
                mode='date'
                onConfirm={(date) => {
                    setOpen(false)
                    setDate(date)
                }}
                onCancel={() => {
                    setOpen(false)
                }}
            />
            {Boolean(errorMessage) ?
                <Text style={styles.error}>{errorMessage}</Text>
                : null}
        </View>
    )
}


const styles = StyleSheet.create({
    label: {
        fontSize: ScaleDimen.ms13,
        color: Colors.PRIMARY_COLOR,
        fontFamily: fontFamily.Roboto_Bold,
        marginTop: 0,
        marginBottom: ScaleDimen.ms10,

    },

    Pickerstyle: {
        backgroundColor: Colors.WHITE,
        borderColor: Colors.DIM_GRAY,
        borderWidth: ScaleDimen.ms1,
        borderColor: Colors.PRIMARY_COLOR,
        justifyContent: 'center',
        height: ScaleDimen.ms50,
        width: '100%',
        padding: 0,
        fontSize: ScaleDimen.ms10,
        color: Colors.DIM_GRAY,
        borderRadius: ScaleDimen.ms5
    },
    date: {
        paddingHorizontal: '5%'
    }
})