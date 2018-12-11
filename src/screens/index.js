import HomeScreen from './HomeScreen/HomeScreen';
import {createStackNavigator} from 'react-navigation';

export const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    }
  },
  {
    initialRouteName: 'Home',
  }
);