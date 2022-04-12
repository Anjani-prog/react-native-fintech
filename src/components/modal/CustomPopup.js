import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Color from '@constants/Colors';
import ScaleDimen from '@constants/ScaleDimen';
import Modal from "react-native-modal";
import { Icon, icoMoonConfigSet } from '../icon/Icon';
import fontFamily from '@constants/fontFamily';


export { PopupContent, CustomPopup }

const PopupContent = ({ type, onPress, text, icon }) => {
    return (
        <View>
            <View style={styles.popupcontainer}>
                <View style={styles.iconContainer}>
                    <Icon
                        name={icon}
                        size={ScaleDimen.ms35}
                        config={icoMoonConfigSet}
                        style={[{ alignSelf: 'center', }]}
                    />
                    {type === 'password' && <Icon
                        name={'ionic-ios-heart'}
                        size={ScaleDimen.ms13}
                        style={styles.icon}
                        config={icoMoonConfigSet}
                    />}
                </View>
                <Text style={styles.text2}>{text}</Text>
                {/* <FormButton
                    title={"ok"}
                    style={{ marginHorizontal: '35%' }}
                    onPress={() => onPress(false)} /> */}
            </View>
        </View>
    )
}


const CustomPopup = (props) => {
    const { visibleModal,
        setvisibleModal,
        childComponent,
        title
    } = props
    return (

        <Modal
            animationIn={'bounceIn'}
            animationOut={'bounceOut'}
            onBackButtonPress={() => setvisibleModal(false)}
            onBackdropPress={() => setvisibleModal(false)}
            isVisible={visibleModal}
            backdropOpacity={0.1}
            backdropTransitionOutTiming={0}
            style={styles.Modal}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContentContainer}>
                    {Boolean(title) && <View style={styles.modalTitle}>
                        <Text style={styles.modalTitleTxt}>{title}</Text>
                    </View>}
                    {childComponent}
                </View>
            </View>
        </Modal>
    )
}


const styles = StyleSheet.create({
    Modal: {
        margin: 0,
        width: '90%',
        alignSelf: 'center',

    },
    modalContainer: {
        backgroundColor: Color.WHITE,
        minHeight: '10%',
        borderRadius: ScaleDimen.ms5
    },
    modalContentContainer: {
        paddingVertical: ScaleDimen.ms10
    },
    modalTitle: {
        borderColor: Color.LIGHT,
        borderBottomWidth: ScaleDimen.ms3,
        paddingVertical: ScaleDimen.ms10,
    },
    modalTitleTxt: {
        color: Color.BLACK,
        fontFamily: fontFamily.Roboto_Medium,
        fontSize: ScaleDimen.ms15,
        alignSelf: 'center'
    },
    popupcontainer: {
        justifyContent: 'center',
        paddingVertical: ScaleDimen.ms10
    },
    text2: {
        textAlign: 'center',
        fontSize: ScaleDimen.ms12,
        fontFamily: fontFamily.Roboto_Medium,
        paddingVertical: ScaleDimen.ms5
    },
    icon: {
        position: 'absolute',
        bottom: ScaleDimen.ms10,
        right: ScaleDimen.ms14,
        padding: ScaleDimen.ms5,
        zIndex: ScaleDimen.ms50,
        // ...GlobalStyles.shadowStyle,
        // borderRadius: Dimens.ms15,
    },
    iconContainer: {
        height: ScaleDimen.ms50,
        width: ScaleDimen.ms80,
        alignSelf: 'center'
    }

})
