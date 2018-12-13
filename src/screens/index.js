import {createStackNavigator} from 'react-navigation';

import HomeScreen from './HomeScreen/HomeScreen';
import AddFundScreen from './AddFundScreen/AddFundScreen';
import ExtractFundScreen from './ExtractFundScreen/ExtractFundScreen';

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