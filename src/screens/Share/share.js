import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { NavigationActions } from 'react-navigation';
import { Icon, Button } from 'react-native-elements';
import OrderIcon from 'react-native-vector-icons/EvilIcons';
import LoginIcon from 'react-native-vector-icons/SimpleLineIcons';
import Help from 'react-native-vector-icons/Feather';
import Circle from 'react-native-vector-icons/Entypo'
import Puzzle from 'react-native-vector-icons/Foundation';
import PercentageCircle from 'react-native-percentage-circle';
import App from 'react-native-vector-icons/Ionicons';
import Star from 'react-native-vector-icons/MaterialIcons';

// import { logout, shopkeeperSignup } from '../store/middleware/authMiddleWare'
// import { connect } from 'react-redux';

export default class Profile extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <View
                    style={{
                        display: 'flex', flexDirection: 'row',
                        justifyContent: 'center',
                        position: 'absolute',
                    }}>
                    <Image
                        style={{ height: 130, width: '100%', marginLeft: 'auto', marginRight: 'auto', position: 'relative' }}
                        source={require('../../../images/download1.jpg')}
                        resizeMode="contain"
                    />
                </View>
                <View style={{ display: 'flex', marginLeft: 'auto', marginRight: 'auto', marginTop: -50 }}>

                    <Text
                        style={{
                            width: 70, height: 70,
                            borderRadius: 100, borderColor: 'white', borderWidth: 2,
                            textAlign: 'center',
                            fontSize: 40,
                            color: 'white',
                            fontWeight: 'bold',
                            marginTop: 65,
                            backgroundColor: '#FDD10C'
                        }}
                    >
                        A

                 </Text>

                    <Text style={{ color: 'white', fontSize: 20, marginTop: 10 }}>
                        Asad Ullah
                </Text>

                </View>
                <View style={{ display: 'flex', flexDirection: 'row', marginLeft: 20, marginTop: -100 }}>
                    <Icon name="menu" color="#C3C4C5" onPress={() => navigate('DrawerOpen')} />
                </View>

                <View style={{ marginTop: 95, flexDirection: 'row', marginLeft: 40 }}>
                    <Puzzle
                        name="puzzle" size={20} color="#ffff"
                        style={{
                            backgroundColor: '#D13E2E',
                            borderRadius: 50, marginLeft: 20,
                            width: 30, height: 30,
                            paddingLeft: 10,
                            paddingTop: 5

                        }}
                    />
                    <Text style={{ fontSize: 18, marginLeft: 10, }}>7 task in total</Text>

                </View>
                <View
                    style={{
                        marginLeft: 'auto', marginRight: 'auto',
                        paddingLeft: 'auto', paddingRight: 'auto',
                        width: 200, height: 200, borderRadius: 100,
                        backgroundColor: '#FDD10C',
                        justifyContent: 'center',
                        marginTop:50
                    }}>
                    <Text style={{ color: 'white', textAlign: 'center', fontSize: 35, fontWeight: 'bold' }}>450</Text>
                    <Text style={{ color: 'white', textAlign: 'center', fontSize: 20, }}>Points</Text>
                </View>

                <Button title="Share it On Facebook"
                  icon={{name: 'share'}}
                    textStyle={{ fontSize: 15, fontWeight: 'bold' }}
                    buttonStyle={{
                        backgroundColor: '#FDD10C',
                        width: 250, height: 50, marginLeft: 'auto', marginTop: 10,
                        marginRight: 'auto',
                        marginTop:30
                    }} />

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f6f6f6',
    },
    uglyDrawerItem: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FDD10C',
        padding: 10,
        margin: 5,
    },
    menuheader: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffff',
        padding: 10,
        margin: 5,
        marginLeft: 10
    },
})