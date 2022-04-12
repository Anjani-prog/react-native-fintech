import React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Colors from '../../constants/Colors';
import ScaleDimen, {scale} from '../../constants/ScaleDimen';
import Routes from '../../navigation/Routes';
import Icons from '../../constants/Icons';
import {Icon, icoMoonConfigSet} from '../../components/icon/Icon';
import {ScrollView} from 'react-native-gesture-handler';

const Header = ({navigation}) => {
  return (
    <View style={[styles?.row, styles?.header]}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles?.row}>
        <Icon
          name={Icons.rightArrow}
          size={ScaleDimen.ms20}
          style={styles.icon}
          config={icoMoonConfigSet}
          color={Colors.WHITE2}
        />
        <Text>Back</Text>
      </TouchableOpacity>
      <Text style={styles.title}>New Request</Text>
    </View>
  );
};

function MoneyRequest({navigation}) {
  return (
    <View style={styles?.container}>
      <Header navigation={navigation} />
      <ScrollView>
        <View style={{alignSelf: 'center', marginTop: ScaleDimen.ms30}}>
          <View style={styles?.view2}>
            <View style={styles?.view3}>
              <Image
                style={styles.image}
                resizeMode="stretch"
                source={require('../../assets/images/person5.png')}
              />
            </View>
          </View>
          <Text style={styles.txt1}>Adeleke Ramon</Text>
          <Text style={styles.txt2}>is requesting for:</Text>
          <View
            style={[
              styles.row,
              {
                alignSelf: 'center',
                paddingVertical: ScaleDimen.ms10,
                marginBottom: ScaleDimen.ms40,
              },
            ]}>
            <Icon
              name={Icons.money}
              size={ScaleDimen.ms38}
              config={icoMoonConfigSet}
              color={Colors.WHITE}
            />
            <Text style={styles.txt3}>200,000</Text>
          </View>
        </View>
        <TouchableOpacity style={[styles.btn, {backgroundColor: '#FF2E63'}]}>
          <Text style={[styles.btnTxt, {color: Colors.WHITE}]}>Send Money</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnTxt}>Dont Send</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BGCOLOR,
  },
  header: {
    paddingVertical: ScaleDimen.ms30,
  },
  btnTxt: {
    color: '#464E8A',
  },

  btn: {
    alignSelf: 'center',
    alignItems: 'center',
    width: ScaleDimen.ms200,
    borderWidth: ScaleDimen.ms1,
    padding: ScaleDimen.ms20,
    margin: ScaleDimen.ms10,
    justifyContent: 'center',
    borderColor: '#464E8A',
    borderRadius: ScaleDimen.ms10,
  },

  txt1: {
    alignSelf: 'center',
    paddingVertical: ScaleDimen.ms20,
    fontSize: ScaleDimen.ms20,
  },
  txt2: {
    alignSelf: 'center',
    paddingVertical: ScaleDimen.ms20,
  },
  txt3: {
    fontSize: ScaleDimen.ms38,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    alignSelf: 'center',
    paddingHorizontal: ScaleDimen.ms100,
    fontSize: ScaleDimen.ms16,
  },
  image: {
    height: ScaleDimen.ms140,
    width: ScaleDimen.ms140,
    borderRadius: ScaleDimen.ms70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  view2: {
    height: ScaleDimen.ms250,
    width: ScaleDimen.ms250,
    borderRadius: ScaleDimen.ms125,
    backgroundColor: '#10194E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view3: {
    height: ScaleDimen.ms200,
    width: ScaleDimen.ms200,
    borderRadius: ScaleDimen.ms100,
    backgroundColor: '#192259',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MoneyRequest;
