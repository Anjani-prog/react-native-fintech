import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View, Text, ScrollView } from 'react-native'
import DatePicker from 'react-native-date-picker'
import ScaleDimen from '@constants/ScaleDimen';
import fontFamily from '@constants/fontFamily';
import ScaleDimen from '@constants/ScaleDimen';
import Colors from '@constants/Colors';
import { CustomBottomHalfModal } from '../modal/CustomModal';
import { Icon, icoMoonConfigSet } from '@components/icon/Icon';
import Icons from '@constants/Icons';
import capitalizeFirstLetter from '@functions/Capitalize';

export const MultiSelectionPicker = (props) => {
    const { label, values, setValues, errorMessage, items, } = props;
    const [open, setOpen] = useState(false)

    const addValues = () => {

    }
    const ModalComponent = ({ values, setValues, items }) => {
        return (
            <ScrollView contentContainerStyle={{ padding: '5%', paddingBottom: '20%' }}>
                {items.map((key, index) => {
                    return (
                        <TouchableOpacity onPress={() => addValues()} style={styles.checkBox}>
                            <Icon
                                name={Icons.radio_unchecked}
                                style={{ paddingRight: '5%' }}
                                color={Colors.PRIMARY_COLOR}
                                size={ScaleDimen.ms25}
                                config={icoMoonConfigSet}
                            />
                            <Text style={styles.checkBoxlabel}>{capitalizeFirstLetter(String(key))}</Text>
                        </TouchableOpacity>
                    )
                })}
            </ScrollView>
        )
    }

    return (
        <View style={{ marginBottom: ScaleDimen.ms20 }}>
            <Text style={[styles.label]}>{label}</Text>
            <View style={[styles.Pickerstyle,]}>
                <TouchableOpacity style={{ flexDirection: 'row', flexWrap: 'wrap' }} onPress={() => setOpen(true)}>
                    <Text style={styles.date}>{values.length === 0 ? label : label}</Text>

                </TouchableOpacity>
            </View>
            <CustomBottomHalfModal
                visibleModal={open}
                setvisibleModal={setOpen}
                childComponent={<ModalComponent values={values} setValues={setValues} items={items} />}
                title={'Select ' + label}
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
        minHeight: ScaleDimen.ms50,
        width: '100%',
        padding: 0,
        fontSize: ScaleDimen.ms10,
        color: Colors.DIM_GRAY,
        borderRadius: ScaleDimen.ms5
    },
    date: {
        paddingHorizontal: '5%'
    },
    checkBox: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: '2%'
    },
    checkBoxlabel: {
        fontFamily: fontFamily.Roboto_Medium,
        fontSize: ScaleDimen.ms14,
        color: Colors.PRIMARY_COLOR
    }
})