import React, {useEffect} from 'react';
import {Image, Linking, Pressable, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {GetMovie, selectAllMovies} from '../../redux/slices/movieSlice';
import {Styles} from './movieDetail.style';

const MovieDetail = ({route}) => {
  const {id} = route.params;
  const dispatch = useDispatch();
  const {selected} = useSelector(selectAllMovies);

  useEffect(() => {
    dispatch(GetMovie(id));
  }, []);

  return (
    <View style={Styles.container}>
      <Text style={Styles.bannerTxt}>{selected.title}</Text>
      <View>
        <Image
          source={{uri: selected.backdrop_path}}
          style={Styles.moviephoto}
        />
      </View>
      <Text style={Styles.bannerTxt}>Description</Text>
      <Text style={Styles.overviewTxt}>{selected.overview}</Text>
      <Text>📅 {selected.release_date}</Text>
      <Pressable
        android_ripple={{color: 'gray'}}
        onPress={() => Linking.openURL(selected.homepage)}>
        <Text>🌐 {selected.homepage}</Text>
      </Pressable>
    </View>
  );
};

export default MovieDetail;
