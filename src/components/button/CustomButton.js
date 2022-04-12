import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { Icon, icoMoonConfigSet } from '@components/icon/Icon';
import Colors from '@constants/Colors';
import ScaleDimen from '@constants/ScaleDimen';
import Spinner from 'react-native-loading-spinner-overlay';
import fontFamily from '@constants/fontFamily';

// use CustomButton
//  <CustomButton    borderColor={}  onPress={}  title={} />

function InputIcon(name) {
    return (
        <Icon
            name={name}
            color={Colors.PRIMARY_COLOR}
            size={ScaleDimen.ms14}
            config={icoMoonConfigSet}
        />
    )
}


export const CustomButton = (props) => {
    const {
        onPress,
        title,
        style,
        disabled,
        icon,
        titleStyle,
        loader } = props;
    return (
        <TouchableOpacity
            style={[styles.largeButtonContainer, style,
            disabled && { borderColor: Colors.LIGHT }
            ]}
            onPress={onPress}
            activeOpacity={0.5}
            disabled={disabled}
        >
            {Boolean(icon) && InputIcon(icon)}
            <Text style={[styles.largeButtonText, titleStyle,
            disabled && { color: Colors.LIGHT }
            ]}>{title.toUpperCase()}</Text>
            <Spinner
                color={Colors.PRIMARY_COLOR}
                visible={loader}
            />
        </TouchableOpacity>
    )
}




const styles = StyleSheet.create({
    largeButtonContainer: {
        backgroundColor: Colors.WHITE,
        height: ScaleDimen.ms50,
        justifyContent: 'center',
        marginTop: '3%'
    },
    largeButtonText: {
        fontSize: ScaleDimen.ms14,
        color: '#4B4B4B',
        textAlign: "center",
        justifyContent: 'center',
        fontFamily: fontFamily.Roboto_Bold,
        paddingHorizontal: 5
    },
    linearGradient: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: ScaleDimen.ms5,
        flexDirection: 'row'
    }

});