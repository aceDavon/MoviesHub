import React from 'react';
import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {s as tw} from 'react-native-wind';
import {useDispatch, useSelector} from 'react-redux';
import {popularMovies, selectAllMovies} from '../redux/slices/movieSlice';

const AllMovies = ({ navigation }) => {
  const {popular} = useSelector(selectAllMovies);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(popularMovies());
  }, []);

  return (
    <View style={tw`w-full px-2 pt-6 bg-gray-200`}>
      <FlatList
        data={popular}
        renderItem={({item}) => (
          <View
            style={[
              tw`rounded w-full bg-white shadow-lg shadow-yellow-500 mx-2 my-4 px-3 py-2 items-center`,
              styles.container,
            ]}>
            <View
              style={[
                tw`w-20 h-28 rounded-full border border-green-400`,
                styles.container,
              ]}>
              <Image
                source={{uri: item.poster_path}}
                style={tw`w-full object-fit rounded-full`}
              />
            </View>
            <View style={[styles.link]}>
              <Pressable
                android_ripple={{color: 'gray'}}
                onPress={() => navigation.navigate('Details', {id: item.id})}>
                <Text style={tw`font-bold text-md text-blue-500`}>
                  {item.title}
                </Text>
                <Text style={tw`font-bold text-md text-blue-500 mt-4 italic`}>
                  <Text style={tw`text-gray-400`}>Released:</Text>{' '}
                  {item.release_date}
                </Text>
                <Text style={tw`font-bold text-md text-blue-500 italic`}>
                  <Text style={tw`text-gray-400`}>Rated:</Text>{' '}
                  {item.vote_average}
                </Text>
                <Text style={tw`font-bold text-md text-blue-500 italic`}>
                  <Text style={tw`text-gray-400`}>With:</Text>{' '}
                  {item.vote_count}{' '}
                  <Text style={tw`text-gray-400`}>Votes</Text>
                </Text>
              </Pressable>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  sub: {
    flex: 1
  },
  link: {
    flex: 2,
    marginLeft: 16
  }
})

export default AllMovies;
