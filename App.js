/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Main from './src/components/Main';
import ChangeInfo from './src/components/ChangeInfo';
import Authentication from './src/components/Authentication';
import OrderHistory from './src/components/OrderHistory';

const MainNavigator = createStackNavigator({
	Main: {screen: Main},
	ChangeInfo: {screen: ChangeInfo},
	Authentication: {screen: Authentication},
	OrderHistory: {screen: OrderHistory},
  });

  const App = createAppContainer(MainNavigator);
export default App;
