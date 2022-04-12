import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Routes from './Routes';

import Home from '@screens/Home';
import MoneyRequest from '../screens/MoneyRequest';
import SearchRecepient from '../screens/SearchRecepient';
import CustomHeader from '@components/header/Header1';
import CustomDrawer from '../components/drawer/CustomDrawer';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import Colors from '../constants/Colors';

const NavStack = createNativeStackNavigator();

const stackScreenOptions = {
  headerBackTitleVisible: false,
  // headerTintColor: colors.blackHeaderText,
  headerTitleAlign: 'center',
};

const NavStackRoute = ({navigation}) => {
  return (
    <NavStack.Navigator
      screenOptions={stackScreenOptions}
      initialRouteName={Routes.HomeTab}>
      <NavStack.Screen
        options={props => ({
          header: () => null,
        })}
        name={Routes.Home}
        component={Home}
      />
      <NavStack.Screen
        options={props => ({
          header: () => null,
        })}
        name={Routes.MoneyRequest}
        component={MoneyRequest}
      />
      <NavStack.Screen
        options={props => ({
          header: () => null,
        })}
        name={Routes.SearchRecipient}
        component={SearchRecepient}
      />
    </NavStack.Navigator>
  );
};
const useInitialRender = () => {
  const [isInitialRender, setIsInitialRender] = React.useState(false);

  if (!isInitialRender) {
    setTimeout(() => setIsInitialRender(true), 10);
    return true;
  }
  return false;
};

const Drawer = createDrawerNavigator();
function AppStack({}) {
  const isInitialRender = useInitialRender();
  const navigation = useNavigation();

  return (
    <Drawer.Navigator
      defaultStatus={'closed'}
      backBehavior="initialRoute"
      drawerContent={props => (
        <CustomDrawer navigation={navigation} {...props} />
      )}
      drawerPosition={'left'}
      screenOptions={{
        drawerStyle: {
          backgroundColor: Colors.BGCOLOR,
          width: isInitialRender ? 0 : '80%',
        },
      }}>
      <Drawer.Screen
        options={props => ({
          header: () => null,
        })}
        name="Main"
        component={NavStackRoute}
      />
    </Drawer.Navigator>
  );
}

export default AppStack;
