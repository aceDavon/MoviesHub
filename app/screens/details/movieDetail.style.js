import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 25,
  },
  bannerTxt: {
    fontWeight: '900',
    color: 'orange',
    fontSize: 34,
    fontFamily: 'Roboto',
    textAlign: 'center',
  },
  photoContainer: {
    width: '80%',
    borderRadius: 8,
  },
  moviephoto: {
    width: 420,
    height: 220,
    resizeMode: 'contain'
  },
  overviewTxt: {
    padding: 8,
    fontSize: 16
  }
});