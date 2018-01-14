import React from 'react'
import { StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native'
import { NavigationActions } from 'react-navigation';
import { Icon, Button } from 'react-native-elements';
import OrderIcon from 'react-native-vector-icons/EvilIcons';
import LoginIcon from 'react-native-vector-icons/SimpleLineIcons';
import Help from 'react-native-vector-icons/Feather';
import Circle from 'react-native-vector-icons/Entypo'
// import { logout, shopkeeperSignup } from '../store/middleware/authMiddleWare'
// import { connect } from 'react-redux';

export default class DrawerContainer extends React.Component {
    constructor(props) {
        super(props)
        this.logoutm = this.logoutm.bind(this)
    }
    logoutm() {
        const { navigate } = this.props.navigation

        this.props.logout(navigate)
    }
    static navigationOptions = {
        header: null,
        tintColor:'red'
    }
    render() {
        const { navigation } = this.props
        return (
            <View style={styles.container}>
                <View
                    style={{
                        display: 'flex', flexDirection: 'row',

                        position: 'absolute'
                    }}>

                    <Image
                        style={{ flex: 1, height: 200, width: undefined, marginTop: -35, }}
                        source={require('../images/download.jpg')}
                        resizeMode="contain"
                    />
                    {/* <Circle name="circle" size={30}title="A"/> */}


                </View>
                <Text
                    style={{
                        width: 70, height: 70,
                        borderRadius: 100, borderColor: 'white', borderWidth: 1.5,
                        textAlign: 'center',
                        fontSize: 50,
                        color: 'white',
                        fontWeight: 'bold',
                        paddingTop: 0,
                        marginLeft: 20,
                        marginTop: 15,
                        backgroundColor: '#FDD10C'

                    }}
                >
                    A

                 </Text>
                <Text style={{ color: 'white', fontSize: 15, marginLeft: 25, fontWeight: 'bold', marginTop: 10 }}>
                    Asad Ullah
                </Text>
                <View style={{ display: 'flex', flexDirection: 'row', marginLeft: 20, marginTop: 10 }}>
                    <Icon name="person" color="#C3C4C5"/>
                    <Text
                        onPress={() => navigation.navigate('ProfileScreen')}
                        style={styles.uglyDrawerItem}>
                        PROFILE
                </Text>

                </View>
                <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', marginLeft: 20 }}>
                    <Icon name="home" color="#C3C4C5" />
                    <Text
                        onPress={() => navigation.navigate('Home')}
                        style={styles.uglyDrawerItem}>
                        HOME
                </Text>
                </TouchableOpacity>
                <View style={{
                    display: 'flex', flexDirection: 'row',
                    paddingLeft: 20, borderBottomColor: '#E1E2E2',
                    borderBottomWidth: 2
                }}>
                    <Icon name="share" color="#C3C4C5" />
                    <Text
                        onPress={() => navigation.navigate('shareScreen')}
                        style={styles.uglyDrawerItem}>
                        SHARE
                </Text>

                </View>
                <View style={{ display: 'flex', flexDirection: 'row', marginLeft: 15 }}>
                    <Icon name="help" color="#C3C4C5" size={30} style={{ marginTop: 15 }} />
                    <Text
                        // onPress={() => this.logoutm()}
                        style={styles.uglyDrawerItem}
                    >

                        Help
                     </Text>
                </View>

                <View style={{ display: 'flex', flexDirection: 'row', marginLeft: 15 }}>
                    <LoginIcon name="logout" color="#C3C4C5" size={30} style={{ marginTop: 15 }} />
                    <Text
                        // onPress={() => this.logoutm()}
                        style={styles.uglyDrawerItem}
                    >

                        Log Out
                     </Text>
                </View>
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
    }
})