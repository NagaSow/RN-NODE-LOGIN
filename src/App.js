// import { Navigation } from 'react-native-navigation';
import {createStackNavigator, createAppNavigator} from 'react-navigation';

import { AsyncStorage } from 'react-native';
import axios from 'axios';
import startPrivate from './Screens/startPrivateScreen';

import AuthScreen from './Screens/AuthScreen';
import CreateAnAccount from './Screens/CreateAnAccount';
import PrivateScreen from './Screens/Private';

const AppStack = createStackNavigator({
	AuthScreen: {
		screen: 'Client.AuthScreen',
	},
	CreateAnAccount: {
		screen: 'Client.CreateAnAccount',
	},
	PrivateScreen: {
		screen: 'Client.PrivateScreen',
	},
  });
  
  const App = createAppNavigator(AppStack);
  

// Navigation.registerComponent('Client.AuthScreen', () => AuthScreen);
// Navigation.registerComponent('Client.CreateAnAccount', () => CreateAnAccount);
// Navigation.registerComponent('Client.PrivateScreen', () => PrivateScreen);

AsyncStorage.getItem('x-auth').then(token => {
	axios
		.get('http://192.168.1.3:5000/users', {
			headers: {
				'x-auth': token,
			},
		})
		.then(response => {
			if (response.status == 200) {
				return startPrivate();
			}
			return App.startSingleScreenApp({
				screen: {
					screen: 'Client.AuthScreen',
				},
			});
		})
		.catch(() => {
			return App.startSingleScreenApp({
				screen: {
					screen: 'Client.AuthScreen',
				},
			});
		});
});

export default App;