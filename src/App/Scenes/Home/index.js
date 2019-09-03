import React, { Fragment, Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert
} from "react-native";
import AsyncStorage from '@react-native-community/async-storage';
import HomeStyle from "./HomeStyle";

export default class Home extends Component<{}> {

  constructor(props) {
    super(props);

    this.state = {
      nickname: '',
    };

  }

  async componentDidMount() {
    await this.getNickName();
  }

  getNickName = async () => {
    try {
      const nickname = await AsyncStorage.getItem('nickname')
      if (nickname !== null) {
        await this.setNickName(nickname)
      }
    } catch (e) {
      console.log(e);
    }
  }

  setNickName = async nickname => {
    nickname !== null && await AsyncStorage.setItem('nickname', nickname)
    await this.setState({
      nickname: nickname
    });

    this.props.navigation.navigate("ChatRoom", { nickname });
  };

  joinRoom = () => {
    if (this.state.nickname.length > 2) {
      this.setNickName(this.state.nickname)
    } else {
      Alert.alert("UPS!", "Nickname must be more than 2 characters.");
    }
  }

  render() {
    return (
      <Fragment>
        <View style={HomeStyle.container}>

          <View style={HomeStyle.logo}>
            <Text style={HomeStyle.logoText}>LeoChat</Text>
          </View>

          <View style={HomeStyle.loginFormContainer}>
            <Text style={HomeStyle.loginFormLabel}>Nickname</Text>
            <TextInput
              style={HomeStyle.loginFormInput}
              placeholder="Pick a nickname..."
              textContentType="nickname"
              onChangeText={(nickname) => this.setState({ nickname })}
              value={this.state.nickname}
            />
          </View>

          <TouchableOpacity
            style={HomeStyle.joinButtonContainer}
            onPress={() => this.joinRoom()}
          >
            <Text style={HomeStyle.joinButtonText}>Join Room</Text>
          </TouchableOpacity>

        </View>
      </Fragment>
    );
  }
}
