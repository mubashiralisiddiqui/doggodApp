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
                <View style={styles.profilename}>
                    <Text style={styles.logo} >A </Text>
                    <Text style={{ color: 'white', fontSize: 20, marginTop: 10 }}>Asad Ullah </Text>
                </View>
                <View style={styles.menuIcon}>
                    <Icon name="menu" color="#C3C4C5" onPress={() => navigate('DrawerOpen')} />
                </View>
                <View style={{ marginTop: 85, flexDirection: 'row', marginLeft: 40 }}>
                    <Puzzle
                        name="puzzle" size={15} color="#ffff"
                        style={styles.Puzzleicon}
                    />
                    <Text style={{ fontSize: 18, marginLeft: 10, }}>7 task in total</Text>
                </View>
                <View style={{ marginLeft: 120, }}>
                    <PercentageCircle radius={65} percent={40} color={"#FDD10C"} borderWidth={5} >
                        <Text style={{ fontSize: 35, fontWeight: 'bold' }}>250</Text>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>POINTS</Text>
                    </PercentageCircle>
                </View>
                <Text style={{ marginLeft: 30, marginTop: 5, fontSize: 15 }}> Tasks done so far .....</Text>
                <View style={{ flexDirection: 'row' }}>
                    <App name="ios-apps" size={20} style={{ marginLeft: 35, marginTop: 20 }} />
                    <Star name='stars' size={20} style={{ marginLeft: 30, marginTop: 20 }} color="#D26030" />
                    <Text style={{ marginLeft: 10, marginTop: 20, fontWeight: 'bold', fontSize: 15 }}>#TASK1:</Text>
                    <Text style={{ marginTop: 20, color: '#818082' }}> Tree planting</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <App name="ios-apps" size={20} style={{ marginLeft: 35, marginTop: 25 }} />
                    <Star name='stars' size={20} style={styles.iconstyle} color="#FDD10C" />
                    <Text style={{ marginLeft: 10, marginTop: 20, fontWeight: 'bold', fontSize: 15 }}>#TASK2:</Text>
                    <Text style={{ marginTop: 20, color: '#818082' }}> Feeding Poor</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <App name="ios-apps" size={20} style={{ marginLeft: 35, marginTop: 25 }} />
                    <Star name='stars' size={20} style={styles.iconstyle} color="#44DFD9" />
                    <Text style={{ marginLeft: 10, marginTop: 20, fontWeight: 'bold', fontSize: 15 }}>#TASK3:</Text>
                    <Text style={{ marginTop: 20, color: '#818082' }}> smiling</Text>
                </View>
                <Text style={styles.bottomborder}></Text>
                <View style={{ marginTop: 15 }}>
                    <Text style={styles.domore}>Do more Tasks to </Text>
                    <Text style={styles.domore}> increase your chances</Text>
                    <Button title="Do it Good"
                        textStyle={{ fontSize: 15, fontWeight: 'bold' }}
                        buttonStyle={styles.button} />
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
    logo: {
        width: 70, height: 70,
        borderRadius: 100, borderColor: 'white', borderWidth: 2,
        textAlign: 'center',
        fontSize: 40,
        color: 'white',
        fontWeight: 'bold',
        marginTop: 65,
        backgroundColor: '#FDD10C',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: 10,
        paddingTop: 5
    },
    menuIcon: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 20,
        marginTop: -100
    },
    button: {
        backgroundColor: '#FDD10C',
        width: 170, height: 40, marginLeft: 'auto', marginTop: 10,
        marginRight: 'auto',
    },
    bottomborder: {
        borderBottomColor: 'lightgray',
        borderBottomWidth: 1.5, width: 300,
        height: 4, marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 20
    },
    domore: {
        textAlign: 'center', fontSize: 16
    },
    iconstyle: {
        marginLeft: 30, marginTop: 25
    },
    Puzzleicon: {
        backgroundColor: '#D13E2E',
        borderRadius: 50, marginLeft: 20,
        width: 20, height: 20,
        paddingLeft: 6,
        paddingTop: 2
    },
    profilename: {
        display: 'flex', marginLeft: 'auto', marginRight: 'auto', marginTop: -50, justifyContent: 'center'
    }
})