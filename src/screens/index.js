import HomeScreen from './HomeScreen/HomeScreen';
import AddFundScreen from './AddFundScreen/AddFundScreen';
import {createStackNavigator} from 'react-navigation';

export const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    AddFund: AddFundScreen
  },
  {
    initialRouteName: 'Home',
  }
);