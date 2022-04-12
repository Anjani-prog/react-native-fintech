import React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Colors from '../../constants/Colors';
import ScaleDimen from '../../constants/ScaleDimen';
import Routes from '../../navigation/Routes';
import Icons from '../../constants/Icons';
import {Icon, icoMoonConfigSet} from '../../components/icon/Icon';

function Splash({setisSplash}) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        resizeMode="stretch"
        source={require('../../assets/images/splash.png')}
      />
      <Icon
        name={Icons.lock}
        size={ScaleDimen.ms70}
        style={styles.icon}
        config={icoMoonConfigSet}
        color={Colors.WHITE2}
      />

      <View style={styles.rect}>
        <View style={styles.row}>
          <View style={styles.scontainer1} />
          <View style={styles.scontainer} />
          <View style={styles.scontainer1} />
        </View>
        <Text style={styles.txt1}>Transfer That Is Safe</Text>
        <Text style={styles.txt2}>
          You have nothing to be scared about, we got you covered.
        </Text>
        <TouchableOpacity onPress={() => setisSplash(false)} style={styles.btn}>
          <Text style={styles.txt3}>Start Banking</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BGCOLOR,
    justifyContent: 'space-between',
  },
  image: {
    width: '100%',
    height: '70%',
  },
  rect: {
    backgroundColor: Colors.LIGHT_BLUE,
    height: '25%',
    bottom: 0,
    borderTopEndRadius: ScaleDimen.ms50,
    width: '85%',
    paddingVertical: ScaleDimen.ms30,
    paddingHorizontal: ScaleDimen.ms10,
    justifyContent: 'space-between',
  },
  scontainer1: {
    backgroundColor: Colors.YELLOW_1,
    width: ScaleDimen.ms15,
    height: ScaleDimen.ms5,
    borderRadius: ScaleDimen.ms2,
    margin: ScaleDimen.ms2,
  },
  scontainer: {
    backgroundColor: Colors.YELLOW,
    width: ScaleDimen.ms20,
    height: ScaleDimen.ms5,
    margin: ScaleDimen.ms2,
    borderRadius: ScaleDimen.ms2,
  },
  row: {
    flexDirection: 'row',
  },
  txt1: {
    fontSize: ScaleDimen.ms16,
    fontWeight: 'bold',
  },
  txt2: {
    fontSize: ScaleDimen.ms14,
    width: '70%',
  },
  txt3: {
    color: Colors.BLUE1,
    fontWeight: 'bold',
  },
  btn: {
    backgroundColor: Colors.WHITE,
    width: '40%',
    padding: ScaleDimen.ms10,
    borderRadius: ScaleDimen.ms5,
  },
  icon: {
    position: 'absolute',
    paddingTop: '83%',
    paddingLeft: '47%',
    color: Colors.ROSE,
  },
});
export default Splash;
