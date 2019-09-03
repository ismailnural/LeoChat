import { StyleSheet } from "react-native";

export default (ChatRoomStyle = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "stretch",
        alignContent: "stretch",
    },
    messageItem: {
        flex: 1,
        flexDirection: "row",
        padding: 15,
    },
    messageItemSender: {
        flexDirection: "row-reverse",
    },
    messageItemAvatar: {
        width: 45,
        height: 45,
        resizeMode: 'cover',
        borderWidth: 1,
        borderColor: '#888',
        borderRadius: 45 / 2,
    },
    messageItemTextContainer: {
        flex: 1,
        paddingLeft: 8,
        paddingTop: 4,
    },
    messageItemTextContainerSender: {
        textAlign: "right",
        alignItems: "flex-end",
        alignContent: "flex-end",
        paddingLeft: 0,
        paddingRight: 8,
    },
    messageItemUserName: {
        paddingBottom: 4,
        color: '#888',
        fontSize: 11,
    },
    messageItemText: {
        fontSize: 15,
        fontWeight: "bold",
        lineHeight: 20,
        color: "#222",
    },

    textInputContainer: {
        // position: "absolute",
        // bottom: 0,
        backgroundColor: '#ddd',
        flexDirection: "row",
    },

    textInput: {
        flex: 1,
        backgroundColor: "#fff",
        margin: 10,
        marginRight: 0,
        padding: 10,
        borderRadius: 100,
    },

    submitButtonContainer: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        margin: 10,
        marginLeft: 0,
        borderRadius: 100,

    },

    submitButtonText: {
        fontWeight: "bold",
    },

}));
