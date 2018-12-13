import HomeScreen from './HomeScreen/HomeScreen';
import AddFundScreen from './AddFundScreen/AddFundScreen';
import ExtractFundScreen from './ExtractFundScreen/ExtractFundScreen';
import {createStackNavigator} from 'react-navigation';

export const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    AddFund: AddFundScreen,
    ExtractFund: ExtractFundScreen,
  },
  {
    initialRouteName: 'Home',
  }
);