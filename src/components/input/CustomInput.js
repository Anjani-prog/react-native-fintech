import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Icon, icoMoonConfigSet } from '@components/icon/Icon';
import { CustomBottomHalfModal } from '../modal/CustomModal';
import Color from '@constants/Colors';
import ScaleDimen from '@constants/ScaleDimen';
import fontFamily from '@constants/fontFamily';
import Icons from '@constants/Icons';
import Colors from '@constants/Colors';

export const CustomInput = (props) => {
  const [focus, setfocus] = useState(false);
  const { inputStyle,
    secureTextEntry,
    label,
    type,
    placeholderText,
    onChangeText,
    value,
    errorMessage,
    keyboardType,
    maxLength,
    editable,
    selectedValue,
    labelBG,
    childComponent,
    title,
    visible,
    setvisible,
    viewEmailInput,
    required } = props;


  const ModalComponent = () => {
    return (
      <>
        {childComponent}
      </>
    )
  }

  const [showPassword, setShowPassword] = useState(true);


  const togglePasswordView = () => {
    setShowPassword(!showPassword)
  }


  return (
    <>

      <View style={styles.container}>
        <View style={[styles.labelContainer, { backgroundColor: labelBG }]}>
          <Text style={[styles.label, {
            color: Boolean(errorMessage) ? Color.RED : Color.PRIMARY_COLOR,
          }]}>{label}</Text>
        </View>
        {type === 'text' &&
          <TextInput style={[styles.textInput, { borderColor: Boolean(errorMessage) ? Color.RED : Color.PRIMARY_COLOR }]}
            editable={editable}
            keyboardType={keyboardType}
            secureTextEntry={secureTextEntry}
            placeholder={placeholderText}
            onChangeText={onChangeText}
            value={value}
            maxLength={maxLength}
            color={Color.GRAY}
            underlineColorAndroid='transparent'
            placeholderTextColor={Color.GRAY}
            onFocus={() => setfocus(true)}
            onBlur={() => setfocus(false)}
          />}
        {type === 'dropdown' &&
          <View style={[styles.textInput, styles.dropdown,
          ]}>
            <Text style={[styles.inputText, { color: Color.PRIMARY_COLOR }]}>{placeholderText}</Text>
            <TouchableOpacity style={styles.dropdownIcon} onPress={() => setvisible(true)}>
              <Icon
                name={Icons.arrow_down2}
                size={ScaleDimen.ms10}
                config={icoMoonConfigSet}
                style={{ color: Color.RED }}
              />
            </TouchableOpacity>
          </View>
        }

        <CustomBottomHalfModal
          visibleModal={visible}
          setvisibleModal={setvisible}
          childComponent={<ModalComponent />}
          title={title}
        />


      </View>
      {Boolean(errorMessage) ?
        <Text style={styles.error}>{errorMessage}</Text>
        : null}</>
  )
}





const styles = StyleSheet.create({
  container: {
    position: 'relative',
    marginVertical: ScaleDimen.ms12,
    height: ScaleDimen.ms55
  },
  label: {
    fontSize: ScaleDimen.ms14,
    fontFamily: fontFamily.Roboto_Bold
  },
  labelContainer: {
    position: 'absolute',
    backgroundColor: Color.WHITE,
    borderRadius: ScaleDimen.ms5,
    top: -ScaleDimen.ms13,
    left: ScaleDimen.ms10,
    padding: ScaleDimen.ms5,
    zIndex: 50,
  },
  textInput: {
    flex: 1,
    borderWidth: ScaleDimen.ms1,
    justifyContent: 'flex-end',
    borderRadius: ScaleDimen.ms5,
    paddingHorizontal: ScaleDimen.ms12,
    height: '80%',

  },
  inputText: {
    fontSize: ScaleDimen.ms15,
    fontFamily: fontFamily.Roboto_Regular,
    color: '#6B7B8D',
    textAlignVertical: 'center',
    height: '100%',
    width: '80%'
  },
  dropdown: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  dropdownIcon: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  error: {
    color: Colors.RED,
    fontFamily: fontFamily.Roboto_Regular
  }
})
