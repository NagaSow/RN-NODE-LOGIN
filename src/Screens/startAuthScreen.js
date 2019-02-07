// import { Navigation } from 'react-native-navigation';
import {createStackNavigator, createAppNavigator} from 'react-navigation';
const MainNavigator = createStackNavigator({
	screen: {
		screen: 'Client.AuthScreen',
	},
  });
  
  const startSingleScreen = createAppNavigator(MainNavigator);
  
  export default startSingleScreen;


// const startSingleScreen = () => {
// 	return Navigation.startSingleScreenApp({
// 		screen: {
// 			screen: 'Client.AuthScreen',
// 		},
// 	});
// };

// export default startSingleScreen;
