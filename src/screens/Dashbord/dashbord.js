import React from 'react';
import { View, Text } from 'react-native';
import { Button, Header, Icon } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';




export default class Home extends React.Component {
    constructor(props) {
        super(props);

    }
    static navigationOptions = {
        drawerLabel: 'Home',
        drawerIcon: ({ tintColor }) => (
            <Icon name="home" style={[{ tintColor: 'red' }]} />
        ),
        header: null
    };

    render() {
        const { navigate } = this.props.navigation;
        console.log("navigate", navigate)
        return (
            <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'column' }}>
                <Header
                    outerContainerStyles={{ backgroundColor: '#FDD10C' }}
                    leftComponent={
                        <Icon
                            name="menu"
                            color="white"
                            onPress={() => navigate('DrawerOpen')}
                        />
                    }
                    rightComponent={
                        <Icon name='home' color="white" />
                    }
                    centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}

                />
                <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'column', marginTop: 50 }}>
                    <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 30, color: '#5A5E60' }}>
                        Smile  More !
                     </Text>

                    <Text style={{ textAlign: 'center', fontSize: 15, color: '#5C5D5F' }}>
                        Take your picture smiling and
                    </Text>

                    <Text style={{ textAlign: 'center', fontSize: 15, color: '#5C5D5F' }}>
                        upload it other to see with the hashtag
                    </Text>
                    <Text style={{ textAlign: 'center', fontSize: 15, color: '#5C5D5F' }}>
                        Do it Good
                    </Text>

                    <Button title="DO it Good"
                        buttonStyle={{ backgroundColor: '#FDD10C', width: 200, height: 50, marginLeft: 65, marginTop: 40 }}
                        textStyle={{ fontSize: 20, fontWeight: 'bold' }}
                    />
                    <Text style={{ textAlign: 'right', marginRight: 100, marginTop: 10 }}>
                        SKIP[1]
                    </Text>
                </View>
            </View>
        )
    }
}