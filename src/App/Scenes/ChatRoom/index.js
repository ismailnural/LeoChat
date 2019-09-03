import React, { Component } from "react";
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    TextInput,
    FlatList,
    Image,
    KeyboardAvoidingView,
    Platform
} from "react-native";
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';
import { MessagesActions } from '@Actions';

import ChatRoomStyle from "./ChatRoomStyle";
import { Images } from "@Assets/Images";

class ChatRoom extends Component<{}> {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('nickname', 'Messages'),
        };
    };

    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            nickname: "",
            message: ""
        };
    }

    async componentDidMount() {
        await this.props.getMessages('https://jsonblob.com/api/jsonBlob/4f421a10-5c4d-11e9-8840-0b16defc864d');
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

    _renderMessageItem = ({ item }) => (
        <View style={[ChatRoomStyle.messageItem, item.type == "sender" ? ChatRoomStyle.messageItemSender : null]}>
            <Image
                style={ChatRoomStyle.messageItemAvatar}
                source={{ uri: item.user.avatarUrl }}
                defaultSource={Images.dummyProfile}
            />
            <View style={[ChatRoomStyle.messageItemTextContainer, item.type == "sender" ? ChatRoomStyle.messageItemTextContainerSender : null]}>
                <Text style={ChatRoomStyle.messageItemUserName}>{item.user.name}</Text>
                <Text style={ChatRoomStyle.messageItemText}>{item.text}</Text>
            </View>
        </View>
    );

    sendMessage = () => {
        this.props.addNewMessage(
            {
                "id": Date.now(),
                "text": this.state.message,
                "type": "sender",
                "user": {
                    "name": this.state.nickname,
                    "avatarUrl": "https://randomuser.me/api/portraits/men/3.jpg"
                },
            }
        );
        this.setState({
            message: ""
        });
    };

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>

                <View style={ChatRoomStyle.container}>
                    <FlatList
                        data={this.props.messages}
                        keyExtractor={(item, index) => item.id}
                        renderItem={this._renderMessageItem}
                        ref="flatList"
                        onContentSizeChange={() => this.refs.flatList.scrollToEnd({ animated: true })}
                    />
                </View>
                <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={Platform.OS === 'ios' ? 88 : 0}>
                    <View style={ChatRoomStyle.textInputContainer}>
                        <TextInput
                            style={ChatRoomStyle.textInput}
                            placeholder="Type your message..."
                            onChangeText={(message) => this.setState({ message })}
                            value={this.state.message}
                        />
                        <TouchableOpacity
                            style={[ChatRoomStyle.submitButtonContainer, { opacity: this.state.message == "" ? 0.4 : 1 }]}
                            onPress={() => this.sendMessage()}
                            disabled={this.state.message == "" ? true : false}
                        >
                            <Text style={ChatRoomStyle.submitButtonText}>Send</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </SafeAreaView>
        );
    }
}

const mapStateToProps = state => {
    return {
        messages: state.messages.messages,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getMessages: (endpoint) => {
            dispatch(MessagesActions.getMessages(endpoint))
        },
        addNewMessage: (text) => {
            dispatch(MessagesActions.addNewMessage(text))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatRoom)
