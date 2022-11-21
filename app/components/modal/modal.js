import React from 'react';
import {Modal, Pressable, Text, View} from 'react-native';
import formData from '../formData/formdata';
import {Styles} from './modal.style';

const ModalWindow = ({header, body, btns}) => {
  const {values, setValues} = formData(true);
  return (
    <Modal
      visible={values}
      transparent={true}
      onRequestClose={() => setValues(false)}
      animationType={'slide'}>
      <View style={Styles.container}>
        <View>
          <View style={Styles.header}>
            <Text style={{textAlign: 'center', fontSize: 16, fontWeight: '600'}}>{header}</Text>
          </View>
          <Text style={Styles.body}>{body}</Text>
          <View style={Styles.modalBtnContainer}>
            {btns.map((btn, i) => {
              return (
                <Pressable
                  key={i}
                  onPress={() => btn.fn(!btn.val)}
                  android_ripple={{color: 'gray'}}
                  style={Styles.modalBtn}>
                  <Text style={Styles.modalBtnTxt}>{btn.label}</Text>
                </Pressable>
              );
            })}
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalWindow;
