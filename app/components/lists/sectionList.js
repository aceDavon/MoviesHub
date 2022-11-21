import React from 'react';
import {SectionList, Text} from 'react-native';

export const List = data => {
  <SectionList
    sections={data}
    renderItem={({item}) => <Text>{item}</Text>}
    renderSectionHeader={({sections: {label}}) => <Text>{label}</Text>}
  />;
};

export default List;
