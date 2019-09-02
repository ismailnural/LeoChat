import { StyleSheet } from "react-native";

export default (HomeStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    alignContent: "stretch",
    padding: 15
  },

  logo: {
    justifyContent: "center",
    alignItems: "center",
  },
  logoText: {
    fontWeight: "bold",
    fontSize: 40,
  },

  loginFormContainer: {
    alignItems: "center",
    width: "100%",
  },
  loginFormLabel: {
    fontWeight: "bold",
    paddingBottom: 10,
  },
  loginFormInput: {
    borderWidth: 2,
    borderColor: "#444",
    borderRadius: 100,
    padding: 15,
    width: "100%",
    textAlign: "center",
  },

  joinButtonContainer: {
    backgroundColor: "#fff",
    borderWidth: 4,
    borderColor: "#444",
    borderRadius: 100,
    paddingVertical: 15,
    paddingHorizontal: 60,
    marginBottom: 30
  },
  joinButtonText: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#444",
    textAlign: "center"
  }

}));
