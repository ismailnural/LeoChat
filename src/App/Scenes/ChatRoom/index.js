import React, { Fragment, Component } from "react";
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    TextInput
} from "react-native";
import AsyncStorage from '@react-native-community/async-storage';

import ChatRoomStyle from "./ChatRoomStyle";

export default class ChatRoom extends Component<{}> {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('nickname', 'Messages'),
            headerBackTitle: 'some label',
            headerBackTitle: {
                title: 'some dynamic title'
            }
        };
    };

    constructor(props) {
        super(props);

        this.state = {
            nickname: ''
        };
    }

    async componentDidMount() {
        await this.getNickName();
    }

    getNickName = async () => {
        try {
            const nickname = await AsyncStorage.getItem('nickname')
            if (nickname !== '') {
                this.setState({
                    nickname: nickname
                });
            }
        } catch (e) {
            console.log(e);
        }
    }

    render() {

        return (
            <Fragment>
                <View style={ChatRoomStyle.container}>

                    <View style={ChatRoomStyle.lead}>
                        <Text style={ChatRoomStyle.leadText}>Chat Rooms</Text>
                        <Text style={ChatRoomStyle.leadText}>{this.state.nickname}</Text>
                    </View>

                </View>
            </Fragment>
        );
    }
}
