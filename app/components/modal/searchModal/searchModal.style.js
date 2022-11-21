import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: '#00000098',
    width: '100%',
    alignSelf: 'center',
    padding: 8
  },
  header: {
    textAlign: 'center',
    fontSize: 16,
    padding: 6,
    backgroundColor: 'yellow',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    color: 'white',
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch'
  },
  body: {
    flex: 1,
    flexDirection: 'column',
    padding: 5,
    backgroundColor: 'white',
    marginBottom: 1,
    width: '90%',
  },
  listItem: {
    borderBottomWidth: 1,
    paddingBottom: 4
  },
  listTitle:{
    fontSize: 16,
    color: 'orange',
    fontWeight: '600'
  }
});