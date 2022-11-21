import React, {useState} from 'react';
import {FlatList, Modal, Pressable, Text, View} from 'react-native';
import {Styles} from './searchModal.style';

const SearchModal = ({arr, fns}) => {
  const [values, setValues] = useState(true);
  return (
    <Modal
      visible={values}
      transparent={true}
      onRequestClose={() => setValues(false)}
      animationType={'slide'}>
      <View style={Styles.container}>
        <View style={Styles.header}>
          <Text>Search results</Text>
          <Pressable
            onPress={() => fns.fn(!fns.val)}
            android_ripple={{color: 'gray'}}>
            <Text>❌</Text>
          </Pressable>
        </View>
        <View style={Styles.body}>
          <FlatList
            data={arr}
            renderItem={({item}) => (
              <View style={Styles.body}>
                <View style={Styles.listItem}>
                  <Pressable
                    android_ripple={{color: 'gray'}}
                    onPress={() => fns.nav.navigate('Details', {id: item.id})}>
                    <Text style={Styles.listTitle}>{item.title}</Text>
                  </Pressable>
                  <Text>Release Date: {item.release_date}</Text>
                  <Text>Language: {item.original_language}</Text>
                </View>
              </View>
            )}
            keyExtractor={(item, index) => `${item.title}-${index + 1}`}
          />
        </View>
      </View>
    </Modal>
  );
};

export default SearchModal;
