import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Colors from '../../constants/Colors';
import ScaleDimen from '../../constants/ScaleDimen';
import Routes from '../../navigation/Routes';
import Icons from '../../constants/Icons';
import {Icon, icoMoonConfigSet} from '../../components/icon/Icon';
import {ScrollView} from 'react-native-gesture-handler';

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

const CustButton = ({text}) => {
  return (
    <TouchableOpacity style={styles.BgContainer}>
      <Text style={styles.btnTxt}>{text}</Text>
    </TouchableOpacity>
  );
};

const TransactionComp = ({item, index}) => {
  return (
    <View
      key={index}
      style={[
        styles.trContainer,
        styles.row,
        {backgroundColor: index % 2 ? '#10194E' : '#192259'},
      ]}>
      <View style={styles.row}>
        <Image style={styles.image} resizeMode="stretch" source={item.image} />
        <View style={{padding: ScaleDimen.ms15}}>
          <Text style={styles.name}>{item?.name}</Text>
          <View style={[styles.statusContainer, {backgroundColor: item.color}]}>
            <View style={styles?.trIcon}>
              <Icon
                name={item?.Icon}
                size={ScaleDimen.ms14}
                config={icoMoonConfigSet}
                color={item.color}
              />
            </View>

            <Text style={styles.tx9}>{item?.status}</Text>
          </View>
        </View>
      </View>
      <View style={styles.row}>
        <Icon
          name={Icons.money}
          size={ScaleDimen.ms14}
          config={icoMoonConfigSet}
          color={item.color}
        />
        <Text style={[styles.txt7, {color: item.color}]}>{item?.price}</Text>
      </View>
    </View>
  );
};

function Home({navigation}) {
  return (
    <View style={styles?.container}>
      <View
        style={[
          styles.row,
          {padding: ScaleDimen.ms15, marginBottom: ScaleDimen.ms10},
        ]}>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => navigation.openDrawer()}
            style={styles.bgContainer}>
            <Icon
              name={Icons.menu}
              size={ScaleDimen.ms20}
              style={styles.icon}
              config={icoMoonConfigSet}
              color={Colors.ROSE}
            />
          </TouchableOpacity>
          <Text style={styles.heading}>Hello Sandra,</Text>
        </View>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.txt2}>Add Money</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.rssign}>Your current balance is</Text>
      <View
        style={[
          styles.row,
          {justifyContent: 'flex-start', marginHorizontal: ScaleDimen.ms10},
        ]}>
        <Icon
          name={Icons.money}
          size={ScaleDimen.ms48}
          config={icoMoonConfigSet}
          color={Colors.WHITE}
        />
        <Text style={styles.rs}>200,000</Text>
      </View>
      <View
        style={[
          styles.row,
          {paddingHorizontal: ScaleDimen.ms10, marginVertical: ScaleDimen.ms45},
        ]}>
        <CustButton text={'Request Money'} />
        <CustButton text={'Send Money'} />
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.bar} />
        <View style={[styles.row, {padding: ScaleDimen.ms15}]}>
          <Text style={styles.txt4}>All Transactions</Text>
          <View style={styles.row}>
            <Text style={styles.txt5}>Sort By:</Text>
            <View style={styles.row}>
              <Text style={styles.txt6}>Recent</Text>
              <Icon
                name={Icons.down}
                size={ScaleDimen.ms8}
                config={icoMoonConfigSet}
                color={Colors.WHITE}
              />
            </View>
          </View>
        </View>
        <ScrollView>
          {data.map((item, index) => {
            return <TransactionComp index={index} item={item} />;
          })}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BGCOLOR,
  },
  statusContainer: {
    borderRadius: ScaleDimen.ms5,
    flexDirection: 'row',
    paddingHorizontal: ScaleDimen.ms7,
    paddingVertical: ScaleDimen.ms3,
    alignItems: 'center',
    margin: ScaleDimen.ms5,
    alignSelf: 'flex-start',
    alignContent: 'center',
  },
  tx9: {
    paddingHorizontal: ScaleDimen.ms4,
  },
  name: {
    fontWeight: 'bold',
    color: '#858EC5',
    fontSize: ScaleDimen.ms16,
  },
  trIcon: {
    backgroundColor: Colors.WHITE,
    height: ScaleDimen.ms20,
    width: ScaleDimen.ms20,
    borderRadius: ScaleDimen.ms10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    height: ScaleDimen.ms60,
    width: ScaleDimen.ms60,
    borderRadius: ScaleDimen.ms30,
  },
  txt7: {
    paddingHorizontal: ScaleDimen.ms5,
    fontSize: ScaleDimen.ms14,
    fontWeight: 'bold',
  },
  txt4: {fontSize: ScaleDimen.ms14},
  txt5: {
    fontSize: ScaleDimen.ms14,
    color: '#4E589F',
    paddingHorizontal: ScaleDimen.ms10,
  },
  txt6: {
    paddingHorizontal: ScaleDimen.ms10,
  },
  bar: {
    width: ScaleDimen.ms80,
    height: ScaleDimen.ms5,
    backgroundColor: '#4E589F',
    alignSelf: 'center',
    marginTop: ScaleDimen.ms20,
  },
  rssign: {
    paddingHorizontal: ScaleDimen.ms15,
    marginTop: ScaleDimen.ms10,
  },
  BgContainer: {
    width: '48%',
    padding: ScaleDimen.ms10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: ScaleDimen.ms15,
    borderColor: Colors.COLOR2,
    borderWidth: ScaleDimen.ms2,
    borderRadius: ScaleDimen.ms5,
  },
  btnTxt: {
    color: '#464E8A',
  },
  rs: {
    fontSize: ScaleDimen.ms48,
    fontWeight: 'bold',
    paddingHorizontal: ScaleDimen.ms5,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: ScaleDimen.ms18,
    paddingLeft: ScaleDimen.ms15,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bgContainer: {
    backgroundColor: Colors.COLOR1,
    padding: ScaleDimen.ms10,
    height: ScaleDimen.ms50,
    width: ScaleDimen.ms50,
    borderRadius: ScaleDimen.ms25,
    justifyContent: 'center',
  },
  txt1: {
    fontSize: ScaleDimen.ms16,
    fontWeight: 'bold',
  },
  txt2: {
    fontSize: ScaleDimen.ms14,
    color: '#426DDC',
  },
  txt3: {
    color: Colors.BLUE1,
    fontWeight: 'bold',
  },
  btn: {
    backgroundColor: Colors.COLOR1,
    padding: ScaleDimen.ms8,
    borderRadius: ScaleDimen.ms5,
  },
  icon: {
    color: Colors.RED,
  },
  bottomContainer: {
    backgroundColor: Colors.Color3,
    flex: 1,
    borderTopEndRadius: ScaleDimen.ms50,
    borderTopStartRadius: ScaleDimen.ms50,
  },
  trContainer: {
    padding: ScaleDimen.ms15,
  },
});

export default Home;
