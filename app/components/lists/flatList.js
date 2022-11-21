import React from 'react'
import { FlatList } from 'react-native'

const List = ({data}) => {
  const list = (item) => {
    <view>
      <Text>{item}</Text>
    </view>
  }
  return <FlatList data={data} keyExtractor={(_, index) => index} renderItem={({item}) => (list(item))} />
}

export default List