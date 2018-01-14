import React from 'react';
import { StackNavigator, DrawerNavigator, DrawerItems, DrawerView, } from 'react-navigation';
import { Homescreen, Dashbord, ScreeTwo, Profile, Share } from '../src/screens/index'
import DrawerContent from './drawerContent';
import { ScrollView, Dimensions } from 'react-native';


// const ShopkeeperDrawerStack = DrawerNavigator({
//     Home: { screen: Homescreen },

//   },

//   contentComponent: props => {
//     return (
//         <ScrollView>
//                   <DrawerItems {...props} key={props} />
//                    <DrawerItems {...props} key={props} style={{ color: 'red' }} />
//         </ScrollView>
//     );
// },
// contentOptions: {
//     drawerWidth: '50px',
//            activeTintColor: "black",
//             activeTintColor: "#339cc9",
//     style: {
//         flex: 1,
//                paddingTop: 15

//     }
// }

//   )
// const MyApp = DrawerNavigator({
//     Home: {
//         screen: Homescreen,
//     },

// },


// );
// const MyApp = DrawerNavigator({
//     Home: {
//                 screen: Homescreen,
//             },
//   },

//     {
//       contentComponent: DrawerContent
//     },

//   )
const routes = {
    Dashbord: { screen: Dashbord },
    ProfileScreen: { screen: Profile },
    shareScreen: { screen: Share }

};
const options = {
    initialRouteName: 'Dashbord',
    contentComponent: DrawerContent,
    contentOptions: {
        activeTintColor: '#e91e63',
        itemsContainerStyle: {
            marginVertical: 0,
        },
        iconContainerStyle: {
            opacity: 1
        }
    },
    drawerWidth: Dimensions.get('window').width - 119,



};

const AppRoutes = DrawerNavigator(routes, options);
AppRoutes.navigationOptions = {
    header: null
}
export { AppRoutes };

const PrimaryStack = StackNavigator({
    DashbordScreen: { screen: AppRoutes },
    Home: { screen: Homescreen, },

    // NextScreen: { screen: ScreeTwo }
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