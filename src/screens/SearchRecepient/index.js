import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import Colors from '../../constants/Colors';
import ScaleDimen from '../../constants/ScaleDimen';
import Routes from '../../navigation/Routes';
import Icons from '../../constants/Icons';
import {Icon, icoMoonConfigSet} from '../../components/icon/Icon';
import {ScrollView} from 'react-native-gesture-handler';
import {CustomBottomHalfModal} from '../../components/modal/CustomModal';
const data = [
  {
    image: require('../../assets/images/person1.png'),
    name: 'Adeboye Usman',
    price: '200,000',
    status: 'Received',
    color: Colors.GREEN,
    Icon: Icons.addUser,
  },
  {
    image: require('../../assets/images/person2.png'),
    name: 'Mercy Popoola',
    price: '110,000',
    status: 'Failed',
    color: Colors.RED,
    Icon: Icons.exclmation,
  },
  {
    image: require('../../assets/images/person3.png'),
    name: 'Onome Adetayo',
    price: '10,000',
    status: 'Sent',
    color: Colors.YELLOW,
    Icon: Icons.sent,
  },
  {
    image: require('../../assets/images/person4.png'),
    name: 'Kingsley Abiodun',
    price: '200,000',
    status: 'Received',
    color: Colors.GREEN,
    Icon: Icons.addUser,
  },
  {
    image: require('../../assets/images/person3.png'),
    name: 'Onome Adetayo',
    price: '10,000',
    status: 'Sent',
    color: Colors.YELLOW,
    Icon: Icons.sent,
  },
  {
    image: require('../../assets/images/person4.png'),
    name: 'Kingsley Abiodun',
    price: '200,000',
    status: 'Received',
    color: Colors.GREEN,
    Icon: Icons.addUser,
  },
];

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
      <TextInput style={styles.input} placeholder="Search" />
    </View>
  );
};

function SearchRecepient({navigation}) {
  const [Visible, setVisible] = useState(true);
  const [contentView, setcontentView] = useState(data[0]);
  const ListPersons = ({item, index}) => {
    let random = Math.floor(Math.random() * (ScaleDimen.screen_width / 10));
    let random2 = Math.floor(Math.random() * 15);
    return (
      <TouchableOpacity
        onPress={() => {
          setVisible(true), setcontentView(item);
        }}
        key={index}
        style={[
          {
            //   top: index * ScaleDimen.ms5,
            left: random,
            alignSelf: 'flex-start',
            padding: index * random2,
          },
        ]}>
        <View style={styles.singleCo}>
          <Image
            style={styles.image2}
            resizeMode="stretch"
            source={item?.image}
          />
          <Text style={styles.name2}>{item?.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles?.container}>
      <Header navigation={navigation} />
      <View style={{justifyContent: 'space-between', flex: 1}}>
        <FlatList
          style={{height: '100%'}}
          data={data}
          numColumns={2}
          renderItem={ListPersons}
          keyExtractor={(item, index) => index}
        />
        <CustomBottomHalfModal
          visibleModal={Visible}
          setvisibleModal={setVisible}
          childComponent={
            <View style={styles.bottomContainer}>
              <View style={styles.bar} />
              <Image
                style={styles.image}
                resizeMode="stretch"
                source={contentView.image}
              />
              <Text style={styles.name}>{contentView.name}</Text>
              <Text style={styles.phn}>(+234) 905 1694 275</Text>
              <TouchableOpacity
                style={[styles.btn, {backgroundColor: '#FF2E63'}]}>
                <Text style={[styles.btnTxt, {color: Colors.WHITE}]}>
                  Continue
                </Text>
              </TouchableOpacity>
            </View>
          }
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BGCOLOR,
  },
  singleCo: {
    alignItems: 'center',
  },
  header: {
    paddingVertical: ScaleDimen.ms30,
    justifyContent: 'space-between',
  },
  image: {
    height: ScaleDimen.ms80,
    width: ScaleDimen.ms80,
    borderRadius: ScaleDimen.ms40,
  },
  image2: {
    height: ScaleDimen.ms50,
    width: ScaleDimen.ms50,
    borderRadius: ScaleDimen.ms25,
  },
  name2: {fontSize: ScaleDimen.ms12, fontWeight: 'bold'},
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: Colors.GREEN,
    width: '75%',
    borderRadius: ScaleDimen.ms5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomContainer: {
    backgroundColor: Colors.Color3,
    borderTopEndRadius: ScaleDimen.ms50,
    borderTopStartRadius: ScaleDimen.ms50,
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%',
  },
  name: {fontSize: ScaleDimen.ms18, fontWeight: 'bold'},
  phn: {fontSize: ScaleDimen.ms12},
  bar: {
    width: ScaleDimen.ms80,
    height: ScaleDimen.ms5,
    backgroundColor: '#4E589F',
    alignSelf: 'center',
    marginTop: ScaleDimen.ms20,
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
});
export default SearchRecepient;
