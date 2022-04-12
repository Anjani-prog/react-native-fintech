import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import Color from '@constants/Colors';
import ScaleDimen from '@constants/ScaleDimen';
import Modal from 'react-native-modal';
import fontFamily from '@constants/fontFamily';
import GradientIcon from '../icon/Gradienticon';
import Icons from '@constants/Icons';

export const CustomBottomHalfModal = props => {
  const {
    visibleModal,
    setvisibleModal,
    childComponent,
    title,
    style,
    containerStyle,
  } = props;

  return (
    <Modal
      onBackButtonPress={() => setvisibleModal(false)}
      onBackdropPress={() => setvisibleModal(false)}
      isVisible={visibleModal}
      backdropOpacity={0.1}
      backdropTransitionOutTiming={0}
      style={styles.bottomModal}>
      <View style={styles.modalContainer}>{childComponent}</View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContainer: {
    backgroundColor: Color.Color3,
    borderTopEndRadius: ScaleDimen.ms50,
    borderTopStartRadius: ScaleDimen.ms50,
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '40%',
  },
});
