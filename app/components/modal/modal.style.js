import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: '#00000098'
  },
  header: {
    textAlign: 'center',
    fontSize: 16,
    padding: 6,
    backgroundColor: 'yellow',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    color: 'white'
  },
  body: {
    textAlign: 'center',
    fontSize: 12,
    padding: 20,
    backgroundColor: 'white',
  },
  modalBtnContainer: {
    borderTopColor: 'gray',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    backgroundColor: 'white',
  },
  modalBtn: {
    padding: 10,
    alignSelf: 'flex-end'
  },
  modalBtnTxt: {
    color: 'white',
    textAlign: 'center',
    backgroundColor: 'orange',
    width: 35,
    padding: 8,
    borderRadius: 6,
    fontWeight: '500'
  }
});