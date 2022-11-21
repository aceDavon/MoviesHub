import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {popularMovies} from './app/redux/slices/movieSlice';
import MovieDetail from './app/screens/details/movieDetail';
import Welcome from './app/welcome';

const Stack = createNativeStackNavigator();

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(popularMovies());
  }, []);
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            component={Welcome}
            name="Welcome"
            options={{title: 'Home'}}
          />
          <Stack.Screen
            component={MovieDetail}
            name="Details"
            options={{title: 'Details'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;
