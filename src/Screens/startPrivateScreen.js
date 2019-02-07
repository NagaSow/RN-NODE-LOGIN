// import { Navigation } from 'react-native-navigation';
import {createStackNavigator, createAppNavigator} from 'react-navigation';


const MainNavigatorTwo = createStackNavigator({
	screen: {
		screen: 'Client.PrivateScreen',
		title: 'Welcome to my private screen',
	},
  });
  
  const startSingleScreen = createAppNavigator(MainNavigatorTwo);
  
  export default startSingleScreen;


// const startSingleScreen = () => {
// 	return Navigation.startSingleScreenApp({
// 		screen: {
// 			screen: 'Client.PrivateScreen',
// 			title: 'Welcome to my private screen',
// 		},
// 	});
// };

// export default startSingleScreen;
