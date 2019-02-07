import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	AsyncStorage,
} from 'react-native';
import React, { Component } from 'react';
import StartAuth from './startAuthScreen';

class PrivateScreen extends Component {
	static navigatorStyle = {
		navBarHidden: true,
	};
	handleLogOut = () => {
		AsyncStorage.removeItem('x-auth')
			.then(() => {
				return StartAuth();
			})
			.catch(() => {
				return StartAuth();
			});
	};
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.message}>Private Message</Text>
				<TouchableOpacity
					style={styles.buttonContainer}
					onPress={this.handleLogOut}
				>
					<Text style={styles.buttonText}>Log out</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		padding: 20,
		backgroundColor: 'rgb(255,82,76)',
	},
	buttonContainer: {
		height: '8%',
		width: '90%',
		backgroundColor: 'orange',
		borderRadius: 25,
		alignItems: 'center',
		justifyContent: 'center',
		borderColor: 'white',
		borderWidth: 1,
	},
	buttonText: {
		fontSize: 34,
		color: 'white',
	},
	message: {
		color: 'white',
		fontSize: 43,
		marginBottom: '20%',
		marginTop: '15%',
	},
});

export default PrivateScreen;
