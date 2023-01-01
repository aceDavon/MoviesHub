import React, {useState} from 'react';
import {FlatList, ImageBackground, Modal, Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import formData from './components/formData/formdata';
import ModalWindow from './components/modal/modal';
import SearchModal from './components/modal/searchModal/searchModal';
import { popularMovies, SearchMovies, selectAllMovies } from './redux/slices/movieSlice';
import {Styles} from './welcome.style';
import { s as tw } from 'react-native-wind';

const body = 'Please Fill in the input to search movies';

const Welcome = ({ navigation }) => {
  const { searched, popular } = useSelector(selectAllMovies);
  const dispatch = useDispatch();
  const {values, handleChange} = formData('');
  const [show, setShow] = useState(false);
  const [popup, setPopup] = useState(false); 
const btn = [{id: 1, label: 'OK', fn: setShow, val: show}];
const searchFn = {fn: setPopup, val: popup, nav: navigation}
  const handleClick = () => {
    if(values.length < 3) {
      setShow(!show)
    }else {
      dispatch(SearchMovies(values));
      setPopup(!popup)
    }
  };

  React.useEffect(() => {
    dispatch(popularMovies());
  }, []);
  const bg = {uri: 'https://wallpaperaccess.com/full/4349200.jpg'};
  return (
    <ImageBackground
      source={bg}
      resizeMode="cover"
      style={LandingStyles.container}>
      <View style={Styles.container}>
        {show && <ModalWindow body={body} btns={btn} header="Warning!" />}
        {popup && <SearchModal arr={searched} fns={searchFn} />}
        <Text style={Styles.bannerTxt}>Welcome</Text>
        <View style={Styles.input}>
          <TextInput
            placeholder="Search..."
            onChangeText={value => handleChange(value)}
          />
        </View>

        <View style={Styles.btnGroup}>
          <Pressable
            style={({pressed}) => [
              {backgroundColor: pressed ? Styles.loadBtn : 'orange'},
              Styles.btn,
            ]}
            android_ripple={{color: 'gray'}}
            onPress={() => handleClick()}>
            <Text style={Styles.text}>Search</Text>
          </Pressable>
        </View>

        <Pressable
          style={({pressed}) => [
            {backgroundColor: pressed ? Styles.loadBtn : 'orange'},
            Styles.btn,
          ]}
          android_ripple={{color: 'gray'}}
          onPress={() => navigation.navigate('AllMovies', {origin: 'home'})}>
          <Text style={Styles.text}>All Movies</Text>
        </Pressable>
      </View>
      <Text style={tw`font-bold text-xl`}>Most Popular searches:</Text>
      <FlatList
        data={popular.slice(0, 3)}
        renderItem={({item}) => (
          <View style={[LandingStyles.starlinks]}>
            <Text
              style={[
                LandingStyles.links,
                tw`text-white font-bold text-center`,
              ]}>
              {item.title}
            </Text>
          </View>
        )}
      />
    </ImageBackground>
  );
};

const LandingStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  starlinks: {
    flex: 1,
    gap: 4,
    // backgroundColor: 'black'
  },
  links: {
    flex: 1
  }
});

export default Welcome;

