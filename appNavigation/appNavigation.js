import React from 'react';
import { StackNavigator, DrawerNavigator, DrawerItems, DrawerView, } from 'react-navigation';
import { Homescreen, Dashbord, ScreeTwo, Profile, Share } from '../src/screens/index'
import DrawerContent from './drawerContent';
import { ScrollView, Dimensions } from 'react-native';
const routes = {
    Dashbord: { screen: Dashbord },
    ProfileScreen: { screen: Profile },
    shareScreen: { screen: Share }

};
const options = {
    initialRouteName: 'Dashbord',
    contentComponent: DrawerContent,
    drawerWidth: Dimensions.get('window').width - 119,
};
const AppRoutes = DrawerNavigator(routes, options);
AppRoutes.navigationOptions = {
    header: null
}
AppRoutes.contentOptions = {
    activeTintColor: 'blue',
    activeBackgroundColor: 'red',
    inactiveBackgroundColor: 'rgba(0,0,0,0)',
    inactiveTintColor: '#black',
    style: {
        marginVertical: 0
    },
    labelStyle: {
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        backgroundColor: 'transparent'
    }
}
export { AppRoutes };

const PrimaryStack = StackNavigator({
    DashbordScreen: { screen: AppRoutes },
    Home: { screen: Homescreen, },
},
    {
        // headerMode: 'none',
        initialRouteName: 'DashbordScreen'
    },

    {
        navigationOptions: ({ navigation }) => ({
            headerStyle: { backgroundColor: '#4C3E54' },
            title: 'Welcome!',
            headerTintColor: 'white',
            // header: null
        })
    }
)

export default PrimaryStack;