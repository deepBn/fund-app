import HomeScreen from './HomeScreen/HomeScreen';
import {createStackNavigator} from 'react-navigation';

export const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  {
    initialRouteName: 'Home',
  }
);