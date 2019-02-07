import React, { Component } from 'react';
import { StyleSheet, View, Image, AsyncStorage } from 'react-native';

import Input from '../Components/Input/Input';
import CustomButton from '../Components/Button/Button';
import TextButton from '../Components/TextButton/TextButton';
import startPrivate from './startPrivateScreen';

// import axios from 'axios';
import axios from 'axios';

export default class App extends Component {
	static navigatorStyle = {
		navBarHidden: true,
	};
	state = {
		email: '',
		password: '',
	};
	handleChangeEmail = text => {
		this.setState(() => {
			return {
				email: text,
			};
		});
	};
	handleChangePassword = text => {
		this.setState(() => {
			return {
				password: text,
			};
		});
	};
	handlePushScreen = () => {
		this.props.navigator.push({
			screen: 'Client.CreateAnAccount',
			title: 'Sign Up',
		});
	};
	handleLogin = () => {
		const { email, password } = this.state;
		if (email && password) {
			axios
				.post('http://192.168.1.3:5000/users/login', {
					email,
					password,
				})
				.then(response => {
					try {
						const token = response.headers['x-auth'];
						if (token) {
							AsyncStorage.setItem('x-auth', token)
								.then(() => {
									startPrivate();
								})
								.catch(() => {
									alert('error');
								});
						}
					} catch (err) {
						alert('error');
					}
				})
				.catch(() => {
					alert('Wrong username or password!');
				});
		} else {
			alert('username and password field are both required!');
		}
	};
	render() {
		return (
			<View style={styles.container}>
				<Image
					source={require('../../assets/images/logo.png')}
					style={styles.img}
				/>
				<View style={styles.formContainer}>
					<Input
						placeholder="username"
						onChangeText={this.handleChangeEmail}
						value={this.state.email}
					/>
					<Input
						placeholder="Password"
						secureTextEntry
						value={this.state.password}
						onChangeText={this.handleChangePassword}
					/>
				</View>
				<View
					style={{
						alignItems: 'center',
						height: 150,
						justifyContent: 'space-around',
					}}
				>
					<CustomButton text="Sign In" onPress={this.handleLogin} />
					<TextButton onPress={this.handlePushScreen} text="Sign Up" />
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: 'rgb(255,255,255)',
	},
	formContainer: {
		height: 150,
		justifyContent: 'space-around',
	},
	img: {
		height: 100,
		width: 100,
		marginTop: '35%',
		marginBottom: '25%',
	},
});
