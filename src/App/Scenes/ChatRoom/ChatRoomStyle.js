import { StyleSheet } from "react-native";

export default (ChatRoomStyle = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        alignContent: "stretch",
        padding: 15
    },

    lead: {
        justifyContent: "center",
        alignItems: "center",
    },
    leadText: {
        fontWeight: "bold",
        fontSize: 40,
    },

}));
