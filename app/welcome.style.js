import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: '85%'
  },
  bannerTxt: {
    fontWeight: '900',
    color: 'orange',
    fontSize: 34,
    fontFamily: 'Roboto',
    textAlign: 'center'
  },
  input: {
    padding: 2,
    margin: 4,
    borderWidth: 2,
    borderColor: '#dedede',
    borderRadius: 8,
    width: '80%'
  },
  btnGroup: {
    margin: 12
  },
  btn: {
    backgroundColor: 'orange',
    color: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 6,
    padding: 8
  },
  text: {
    fontSize: 18,
    color: 'white'
  }
})